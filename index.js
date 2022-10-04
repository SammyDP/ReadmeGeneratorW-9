// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "project",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installion instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter contribution instructions:",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter testing instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your application?",
    choices: ["MIT License", "Apache 2.0 License", "unlicense"],
  },
  {
    type: "input",
    name: "email",
    message: "Input Email for Submitting Questions or Comments:",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
