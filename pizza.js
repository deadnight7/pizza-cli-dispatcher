#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');


program
  .version('0.0.1')
  .description('An application for pizzas ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-m, --my-input [type]', 'Do should be true..')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

console.log("Welcome to pizza shop, Please enter the pizza type..!");

//Ask for user - would you like fries?


//Ask user - would you like to have pepsi? 



console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbq) console.log('  - bbq');

var cheese = true === program.cheese
  ? 'marble'
  : program.cheese || 'no';

console.log('  - %s cheese', cheese);
console.log(program.args);