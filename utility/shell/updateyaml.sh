#!/usr/bin/env bash

update () {
    # echo "Running..."
    # echo "$2"
    echo "\r\rProcesing2 :: $1"
    local filecontent="$(<$1)"
    local newcontent="$YAML\n\n$filecontent\n"
    # echo "$newcontent"
    echo "$newcontent" > $1
}


export -f update
export YAML="$(cat yamltemplate.txt)"

find . -name "*.md" -exec bash -c "update \"{}\""  \;