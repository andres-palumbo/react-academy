#!/bin/bash

set -e

source .github/env.sh

printf "registry=https://$REGISTRY/npm/ \n_auth=$AUTH" > .npmrc

if [ -f "Dockerfile" ]; then
  echo "Building docker image for $PROJECT and version $VERSION"
  docker build -t $DOCKER_REGISTRY/$PROJECT:$VERSION . -f Dockerfile.ci
fi
