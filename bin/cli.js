#!/usr/bin/env node

var runner = require('../')

process.stdin.pipe(runner())
