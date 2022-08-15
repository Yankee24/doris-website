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
    if [ $(contains "${reserved[@]}" "$file") == "n" ]; then
        echo "delete $ROOT/$file"
        if [ $file != "remove-non-reserved-dir.sh"]; then
           if [ [ $FILE =~ "remove-non-reserved-dir.sh" ] ]; then
              echo "cannot delete $ROOT/$file"
           else
             rm -rf $ROOT/$file
           fi
        fi
    fi
done
