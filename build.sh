#!/bin/bash
npx browserify parsePGN.js --standalone PGNParser -o pgn-bundle.js && echo "Successfully built pgn-bundle.js"