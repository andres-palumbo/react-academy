#!/bin/bash

set -e

source ./.github/env.sh

environment="NONE"

if [[ "$GIT_BRANCH" =~ release/.* ]]; then
  environment="STAGE"
fi

if [[ "$GIT_BRANCH" =~ hotfix/.* ]]; then
  environment="STAGE"
fi

if [ "$GIT_BRANCH" = "develop" ]; then
  environment="DEV"
fi

if [ "$GIT_BRANCH" = "master" ]; then
  environment="PROD"
fi

if [ -f "Dockerfile" ]; then
  echo "Deploying ${PROJECT} version ${VERSION} to ${environment}"
  curl \
    https://api.spinnaker.greatminds.dev/webhooks/webhook/${PROJECT} \
    -H 'content-type: application/json' \
    -d "{\"version\": \"$VERSION\", \"environment\": \"${environment}\"}"
fi
