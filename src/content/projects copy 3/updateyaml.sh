#!/usr/bin/env bash

YAML=$(<yamltemplate.txt)

update () {
    filecontent=$(<$1)
    newcontent="$YAML\n\n$filecontent\n"
    echo $newcontent > $1
}

export -f update
find . -name "*.md" -exec bash -c "update \"{}\"" \;