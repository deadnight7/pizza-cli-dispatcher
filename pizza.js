#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var inquirer = require('inquirer');

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

//Ask user details - name - last_name - phone number
var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "Tell us your first name: "
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What is your last name",
    default: function () {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number",
    validate: function (value) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }
      return 'Please enter a valid phone number - 123-456-7777';
    }
  },
  {
    type: 'password',
    name: 'password',
    message: "Set your pizza ordering password"
  },
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter: function (val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese'
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed'
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian'
      }
    ]
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke']
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!'
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when: function (answers) {
      return answers.comments !== 'Nope, all good!';
    }
  }
];


inquirer.prompt(questions).then(answers => {
  //console.log(JSON.stringify(answers, null, '  '));

  //Once user enters in details - set the pizza order for him

  console.log('you ordered a pizza with:');
  if (program.peppers) console.log('  - peppers');
  if (program.pineapple) console.log('  - pineapple');
  if (program.bbq) console.log('  - bbq');

  var cheese = true === program.cheese
    ? 'marble'
    : program.cheese || 'no';

  console.log('  - %s cheese', cheese);
  console.log(program.args);
  
});


