#!/bin/sh

###
# USAGE: cdnjs-clone.sh $repoDir
###

DIR=$1

# If dir exists, just cd to it and pull. if not, clone
ls $DIR/.git && (
  cd $DIR
  git checkout master
  git pull origin master
) || (
  git clone git://github.com/cdnjs/cdnjs $DIR
  cd $DIR
)
