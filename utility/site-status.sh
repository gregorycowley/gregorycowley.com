#!/bin/bash
# now ls
# now domains

SITES=(
    "cowley.co"
    "cowleystudios.com" 
    "cowleyxd.com" 
    "gmotion.co" 
    "gmotion.dev"
    "gmotiondev.com"
    "gmotionstudios.com"
    "gmoto.io" 
    "gregorycowley.com" 
    "kyds.co" 
    "metamob.com" 
    "photozoic.com" 
    "testsite.org" 
)

for site in ${SITES[@]};
do
    CHECK=$( curl -s -I "https://${site}" | grep "content-length: " | cut -c"17-" )
    # CHECK=$( curl -s -I "https://${site}" | awk '$1 == "content-length: " {print $2}' )
    if [[ $CHECK > 0 ]]
    then
        echo "Result for ${site} ${CHECK}"
    else 
        printf "\n>> !${site} is not active!\n\n"
    fi
done
