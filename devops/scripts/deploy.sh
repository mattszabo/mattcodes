#!/bin/bash -e

# Shared config + functions
. $(dirname $0)/lib/utils

environment=${1:-dev}
step "Running 'AWS stack create/update' for environment '${stack_name}'"
stack_name="${APPLICATION_NAME}-${environment}"
bucket_name="${APPLICATION_NAME}-${environment}"

if [ ! -d ./build ]; then
  log "ERROR: No build artifacts to deploy (no files in ./build)"
  exit 1
fi

step "Uploading website to S3"
aws s3 sync build s3://${bucket_name}/ --exclude ".git*" --exclude "*.map" --exclude "aws*" --cache-control "max-age=30" --acl public-read
aws s3 cp build/index.html s3://${bucket_name}/index.html --cache-control "max-age=30" --acl public-read

step "Done!"
domain=$(get_stack_output $stack_name DomainName)
log "Head on over to ${domain}"