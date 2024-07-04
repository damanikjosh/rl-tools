#!/bin/bash
set -e

if [ -z "$1" ]; then
    echo "Error: No path to the experiments directory provided."
    echo "Usage: $0 <path_to_experiments>"
    exit 1
fi

cd $1
find . -type f -not -path '\.\/\.git*' | grep -v index.txt\$ | grep -v index_files.txt\$ | grep -v index_directories.txt\$ | grep -v index_static.txt\$ | grep -v index_static.txt.tmp\$ | grep -v .gitignore\$ | sort > index_static.txt.tmp
mv index_static.txt.tmp index_static.txt
echo "Wrote $(pwd)/index_static.txt"
