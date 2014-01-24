#!/bin/sh

###
# USAGE: bower $dir $version $remote
###

DIR=$1
VERSION=$2
REMOTE=$3

cd $DIR

rm -rf .git
git init .
git add -A
git commit -am 'chore(release): v'$VERSION
git tag $VERSION
git push --tags -f $REMOTE master
