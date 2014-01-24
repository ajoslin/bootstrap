#!/bin/sh

###
# USAGE: prerelease.sh $projectRoot $newVersion
###

DIR=$1
VERSION=$2

cd $DIR

git commit -a -m 'chore(release): v'$VERSION
git tag $VERSION
#git push --tags origin master

git branch -D gh-pages
git fetch origin gh-pages
git checkout -b gh-pages origin/gh-pages

# get list of all files in dist, take out bower/cdnjs,
# and then prepend dist/ to name
DOC_FILES=$(ls dist | grep -v bower | grep -v cdnjs | sed 's/^/dist\//')

cp -Rf $DOC_FILES .
git add -A
git commit -am 'chore(release): v'$VERSION
#git push --tags origin gh-pages

git checkout gulpfile
