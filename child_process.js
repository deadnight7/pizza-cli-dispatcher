


//import run,{ ENTER } from 'inquirer-test';
const run = require("inquirer-test");
const ENTER = require("inquirer-test").ENTER;
const UP = require("inquirer-test").UP;
const DOWN = require("inquirer-test").DOWN;

var exec = require("child_process").exec;

const cliPath = "pizza";

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
// }
// module.exports = { execute };