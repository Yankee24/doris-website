#!/bin/bash

set -eo pipefail

ROOT=`dirname "$0"`
ROOT=`cd "$ROOT"; pwd`

reserved=(
build
remove-non-reserved-dir.sh
versions.json
.asf.yaml
.nojekyll
.git
.
..
)

function contains() {
    local n=$#
    local value=${!n}
    for ((i=1;i < $#;i++)) {
        if [ "${!i}" == "${value}" ]; then
            echo "y"
            return 0
        fi
    }
    echo "n"
    return 1
}

for file in `ls -a $ROOT`
do
    echo "${reserved[@]}"
    if [ $(contains "${reserved[@]}" "$file") == "n" ]; then
        echo "delete $ROOT/$file"
        rm -rf $ROOT/$file
    fi
done
