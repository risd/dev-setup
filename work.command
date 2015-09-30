#!/usr/bin/env bash
ROOT="$( dirname "${BASH_SOURCE[0]}" )"

cd "$ROOT"

echo -e "Updating npm dependencies."
npm install

npm start
