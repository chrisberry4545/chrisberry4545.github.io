#!/bin/bash
shopt -s extglob
set -u
CURRENT_BRANCH="`git branch | grep \* | cut -d ' ' -f2`"
echo "Checking out to 'develop' branch and pulling latest"
git checkout develop
git pull

# Delete old master branch and reinitialise from develop
echo "Recreating 'master' from 'develop'"
git branch -D master
git checkout -b master

npm i
npm run build
rm -rf !(build|node_modules|package.json|package-lock.json)
cp -R build/* .
git add .
git commit -m "deployment"
git push -f origin master

git checkout ${CURRENT_BRANCH}
