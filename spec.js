#!/usr/bin/env node

/**
 * Module dependencies.
 */
var exec = require('child_process').exec;

//Sample tests using node - exec command 

//Will execute password command 'pwd'
/*exec('pwd', function callback(error, stdout, stderr){
    // result
    console.log ("error "+error+", stdout "+stdout+", stderr : "+stderr);
});*/

test();

async function test (){
    
    /**
await exec('ls -al', function callback(error, stdout){
    if (error){
        console.log("error : "+error);
        throw error;
    }
    // result
    console.log ("Directory Listing :  ");
    console.log(stdout);
});


await exec('pizza -h', function callback(error, stdout){
    if (error){
        console.log("error : "+error);
        throw error;
    }
    // result
    console.log ("Directory Listing :  ");
    console.log(stdout);
});


await exec('pizza -n', function callback(error, stdout){
    if (error){
        console.log("error : "+error);
        throw error;
    }
    // result
    console.log ("Directory Listing :  ");
    console.log(stdout);
});

 */
await exec("pizza", function callback(error, stdout, s){
    
    console.log(s+ error+" "+stdout);
    if (error){
        console.log("error : "+error);
        throw error;
    }
    // result
    console.log ("Directory Listing :  ");
    console.log(stdout);
});



}