#!/bin/bash

set -e

source .github/env.sh

if [ -f "Dockerfile" ]; then
  echo "Pushing docker image for $PROJECT and version $VERSION"
  docker push $DOCKER_REGISTRY/$PROJECT:$VERSION
fi