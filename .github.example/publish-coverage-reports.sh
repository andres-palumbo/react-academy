#!/bin/bash

set -e

source ./.github/env.sh

if [ -d coverage/lcov-report/ ]; then
  aws s3 sync \
    --quiet \
    coverage/lcov-report/ \
    s3://dp-test-reports/$PROJECT/coverage/$GIT_BRANCH/
  echo "https://dp-test-reports.s3.amazonaws.com/$PROJECT/coverage/$GIT_BRANCH/index.html"
fi