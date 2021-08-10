#!/usr/bin/env bash

DIR=$(pwd)

for file in "$DIR/"*; do
    if [[ -f $file && "$file" == *".md" ]];
    then
        project="$(basename -s .md $file)"
        mkdir "$DIR/$project"
        mkdir "$DIR/$project/assets"
        mv $file "$DIR/$project"
    fi

    # echo "$file\n"

done
