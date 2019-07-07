#!/bin/bash -e

aws cloudformation validate-template --template-body file://scripts/stack.yaml
