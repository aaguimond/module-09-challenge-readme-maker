// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description for your project.'        
    },
    {
        type: 'input',
        name: 'status',
        message: 'What is the status of your project?'        
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What is the purpose of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How would a user install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions or examples.'        
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list any collaborators for the project and any attributions for third-party applications or assets.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is your project under?'        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
