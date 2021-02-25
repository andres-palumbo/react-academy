#!/bin/bash

set -e

source ./.github/env.sh

if [ -f test-report.html ]; then
  aws s3 cp \
    --quiet \
    test-report.html \
    s3://dp-test-reports/$PROJECT/tests/$GIT_BRANCH/test-report.html
  echo "https://dp-test-reports.s3.amazonaws.com/$PROJECT/tests/$GIT_BRANCH/test-report.html"
fi