// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title"
        message: "What is your project's title?"
    }
    {
        type: "input",
        name: "description"
        message: "Write a description of your project"
    }
    {
        type: "input",
        name: "installation"
        message: "Are there any required steps for installation?"
    }
    {
        type: "input",
        name: "usage"
        message: "How to use this project"
    }
    {
        type: "input",
        name: "contributions"
        message: "Credit any contributors"
    }
    {
        type: "input",
        name: "tests"
        message: "Add any testing instructions here"
    }
    {
        type: "input",
        name: "license"
        message: "Which license are you using?"
    }
    {
        type: "input",
        name: "email"
        message: "What is your email address?"
    }
    {
        type: "input",
        name: "username"
        message: "What is your GitHub username?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
