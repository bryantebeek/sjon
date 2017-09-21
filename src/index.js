#!/usr/bin/env node

const notifier = require('update-notifier')();
if (notifier.update) notifier.notify();

console.log('sjon');
