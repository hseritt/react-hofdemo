#!/usr/bin/env bash

NPM="/home/hseritt/.nvm/versions/node/v8.11.3/bin/npm"
JSON_SERVER="/home/hseritt/.nvm/versions/node/v8.11.3/bin/json-server"

$JSON_SERVER --watch json-server/players.json --port 8000 &
$NPM start

