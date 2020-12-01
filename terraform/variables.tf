variable "env_prefix" {
  type = string
  description = "Environment prefix. Could be dev or prod."
}

variable "aws_profile" {
  type = string
  description = "AWS profile to use for deployment. Could be dev or prod."
}