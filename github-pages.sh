#!/bin/bash -e

# 配置参数
ORIGIN_URL="git@github.com:butterandfly/distribution.gitt"
LOCAL_DIR="build"

cd $LOCAL_DIR
if [ $? -ne 0 ]; then
  echo "Exit!"
  exit 1
fi

# Commit
echo "Committing..."
git init
git remote add gh $ORIGIN_URL
git checkout --orphan gh-pages
git add .
git commit -m "gh"

# Upload
echo "Uploading..."
git push gh gh-pages --force

echo "Finished."