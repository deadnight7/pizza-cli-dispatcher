#!/usr/bin/env node

/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

exec('pwd', function callback(error, stdout, stderr){
    // result
    console.log ("error "+error+", stdout "+stdout+", stderr : "+stderr);
});

