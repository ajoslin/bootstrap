#!/bin/sh

#Usage: cdnjs.sh DIR VERSION BRANCH

DIR=$1
VERSION=$2
BRANCH=$3

cd $DIR
git branch -D $BRANCH
git checkout -b $BRANCH
git add -A
git commit -am '[author] angular-ui-bootstrap version '$VERSION
git remote add github git@github.com:angular-ui/cdnjs
git push -f github $BRANCH

