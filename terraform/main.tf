provider "aws" {
  profile = var.aws_profile
  region = "ap-southeast-2"
}

resource "aws_s3_bucket" "mattcodes_web" {
  bucket = "mattcodes-web-${var.env_prefix}"
  acl = "private"

  website {
    index_document = "index.html"
  }

  tags = {
    Name = "mattcodes website"
    Environment = var.env_prefix
  }
}

resource "aws_s3_bucket_public_access_block" "mattcodes_web" {
  bucket = aws_s3_bucket.mattcodes_web.id

  block_public_acls   = true
  block_public_policy = true
  restrict_public_buckets = true
  ignore_public_acls = true
}

resource "aws_s3_bucket_policy" "mattcodes_web" {
  bucket = aws_s3_bucket.mattcodes_web.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Id": "MattcodesWebsiteBucketPolicy",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": {
                "AWS": "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.origin_access_identity.id}"
            },
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::mattcodes-web-${var.env_prefix}/*"
      ]
    }
  ]
}
POLICY
}

locals {
  s3_origin_id = "MattcodesS3Origin"
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "Origin access identity for mattcodes ${var.env_prefix}"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.mattcodes_web.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = "origin-access-identity/cloudfront/${aws_cloudfront_origin_access_identity.origin_access_identity.id}"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "mattcodes ${var.env_prefix} distribution"
  default_root_object = "index.html"

  # logging_config {
  #   include_cookies = false
  #   bucket          = "mylogs.s3.amazonaws.com"
  #   prefix          = "myprefix"
  # }

  # aliases = ["mysite.example.com", "yoursite.example.com"]

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = true  

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  # PriceClass_All is the only price class that includes Australia
  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["AU"]
    }
  }

  tags = {
    Environment = var.env_prefix
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}