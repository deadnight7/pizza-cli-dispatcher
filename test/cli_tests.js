
//var assert = require('assert');
const assert = require ("chai").assert;

var exec = require('child_process').exec;

describe("Verify Directory Listing ls -al", function (){
    
    it ("Should display total files in dir ", async function (){
        debugger;
        var output = "";
        await exec('ls -al', function callback(error, stdout){
            if (error){
                console.log("error : "+error);
                output = error;
                //throw error;
            }
            // result
            //console.log ("Directory Listing :  ");
            //console.log(stdout);
            output = stdout;
        });
        await console.log("output was : "+ ""+output.indexOf("total"));
        await assert.equal((output.indexOf("total") === -1), false, "Output for ls -al should contain total files");
   
    });
});

/**
 * 
 
var assert = require('assert');
//const chai = require('chai');
//const assert = chai.assert();
//const should = require('chai').should

describe ("Validate Pizza Program",function   () {
   
    it ("Should ask for user name",function  () {
        assert.equal([1,2,3].indexOf(4), 1);
        
        //throw new Error ("Invalid args");
    });
    it ("Should ask for last name", function  () {
        //assert.equal(123,124);
    });
});

 */