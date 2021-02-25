#!/bin/bash

# REMEMBER TO CONFIGURE THIS FILE BEFORE DEPLOYING
echo "Please check env.sh and ensure everything is configured properly."
exit 1

export GIT_BRANCH=$(echo $GITHUB_REF | sed -e 's/refs\/heads\/\(.*\)/\1/g')

export PROJECT_PREFIX=SET-ME-UP

export VERSION=$(cat package.json | jq -r ".version");
if [[ $GIT_BRANCH == "develop" ]]; then
    export VERSION=${GITHUB_SHA::8}
fi

export NPM_REPOSITORY=https://nexus.greatminds.dev/repository/npm-private

export DOCKER_REGISTRY=491070403555.dkr.ecr.us-east-1.amazonaws.com
