#!/bin/sh

###
# USAGE: post-release.sh DIR NEXTVERSION
###

DIR=$1
VERSION=$1

cd $DIR
git commit -am 'chore(release): starting version '$VERSION
#git push origin master
