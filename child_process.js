
//import run,{ ENTER } from 'inquirer-test';

//Assertion
const assert = require("assert");

const run = require("inquirer-test");
const ENTER = require("inquirer-test").ENTER;
const UP = require("inquirer-test").UP;
const DOWN = require("inquirer-test").DOWN;

//Child Process Exec Command
var exec = require("child_process").exec;

//Pizza CLI Program
const cliPath = "pizza";

describe("Verify Pizza Command", function () {


    it("Should show help on providing -h param", function (done) {
        exec("pizza -h", function (error, output, stderr) {
            if (error || stderr) {
                throw new Error("pizza -h failed \n Error : " + error + "\n stdError: " + stderr);
            }
            //console.log("output :" +output);

            done();
        });
    });


    it("Should order with marble cheese on -m param", function (done) {
        exec("pizza -n", function (error, output, stderr) {
            if (error || stderr) {
                throw new Error("pizza -m failed \n Error : " + error + "\n stdError: " + stderr);
            }
            
            let strExpectedOutput = "you ordered a pizza with:\n"
            " - marble cheese"; 
            //output = "Hello";
            if (output.indexOf(strExpectedOutput) != -1){
                //Pass
                done();
            }
            else {
                throw new Error("Unable to order pizza with pizza -n param");
            }
           //assert.notEqual(output.indexOf(strExpectedOutput), 1);
           //done();
        });
    });

    it("Should prompt user for entering user name", async function () {
        
        const result = await run([cliPath], [""]);
        //console.log("result: " + result);
        
        var strExpectedOutput = "Welcome to pizza shop, Please enter the pizza type..!"+
        "\n? Tell us your first name:";

        if (result.indexOf(strExpectedOutput) != -1){
            //Pass
        }
        else {
            throw new Error("No prompt present asking username when user goes into CLI");
        }
        
    });


    it("Prompt user when invalid phone number '>> Please enter a valid phone number - 123-456-7777'", async function () {
        
        const result = await run([cliPath], [
            ENTER,
            ENTER,
            "1234567" + ENTER]);
        //console.log("result: " + result);
        
        var strExpectedOutput = ">> Please enter a valid phone number - 123-456-7777";
        if (result.indexOf(strExpectedOutput) != -1){
            //Pass
        }
        else {
            throw new Error("Validation message not present when user types in invalid phone number");
        }
    });

    //Validate successful 

});


/*
async function test() {
    const result = await run([cliPath], [
        ENTER,
        ENTER,
        "555-444-3333" + ENTER,
        "PASSWORD" + ENTER,
        "y" + ENTER,
        "40" + ENTER,
        DOWN + ENTER,
        ENTER + "w" + ENTER,
        "2" + ENTER,
        "Inquirer Test FTW..!" + ENTER,
        DOWN + ENTER
    ]);
    console.log("result: " + result);


    await exec("pwd", function (stdErr, stdOut) {
        console.log("Output : " + stdOut);
        console.log("Error : " + stdErr);
    });

    await exec("ls -al", function (stdErr, stdOut) {
        console.log("Output : " + stdOut);
        console.log("Error : " + stdErr);
    });
    await exec("pizza -n", function (stdErr, stdOut) {
        console.log("Output : " + stdOut);
        console.log("Error : " + stdErr);
    });

};
test();
*/
/*
// var assert = require('assert');
// const spawn = require('child_process').spawn;
// const concat = require('concat-stream');
// // const response = await execute(
// //     'pizza',
// //     ['--peppers', '--cheese', 'gouda']
// //   );
// /*
// describe("Validate Pizza Program", function () {

//     it("Should ask for user name", function () {


//         expect(response).to.equal(
//             'you ordered a pizza with:\n  - peppers\n  - gouda cheese'
//         );
//     });
//     // it ("Should ask for last name", function  () {
//     //     //assert.equal(123,124);
//     // });
// });
// */
// function createProcess(processPath, args = [], env = null) {
//     args = [processPath].concat(args);

//     return spawn('node', args, {
//         env: Object.assign(
//             {
//                 NODE_ENV: 'test'
//             },
//             env
//         )
//     });
// }

// function execute(processPath, args = [], opts = {}) {
//     const { env = null } = opts;
//     const childProcess = createProcess(processPath, args, env);
//     childProcess.stdin.setEncoding('utf-8');
//     const promise = new Promise((resolve, reject) => {
//         childProcess.stderr.once('data', err => {
//             reject(err.toString());
//         });
//         childProcess.on('error', reject);
//         childProcess.stdout.pipe(
//             concat(result => {
//                 resolve(result.toString());
//             })
//         );
//     });
//     return promise;
// 
