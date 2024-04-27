// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'What is the status of your project?',
        filter: function trimStatus(status) {
            return status.trim();
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please input a link to the GitHub repository of your project.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'site',
        message: 'Please input a link to the live deployment of your application.',
        default: 'N/A'       
    },
    {
        type: 'input',
        name: 'media',
        message: 'Please input any links to screenshots or video of your project, separating each with a comma, or if there are none, press enter or enter "N/A".',
        default: 'N/A',
        filter: function(value) {
            return value.split(',').map(link => link.trim());
        }
    },
    {
        type: 'input',
        name: 'alt',
        message: 'Please input any alt text for your media, separating each with a comma, or if there is none, press enter or enter "N/A".',
        default: 'N/A',
        filter: function(value) {
            return value.split(',').map(alt => alt.trim());
        }   
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
        message: 'Please list any collaborators for the project and any attributions for third-party applications or assets, separating each with a comma.',
        filter: function(value) {
            return value.split(',').map(credit => credit.trim());
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is your project under?'        
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other users contribute to the project?'        
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for the project?'        
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email can people contact you at?'        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if (error) {
            console.error('There was an error writing the README file: ', error);
        } else {
            console.log('README file was successfully created');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('Answers: ', response);
            writeToFile('README.md', response);
        })
        .catch((error) => {
            console.error('An error occurred: ', error);
        });
}

// Function call to initialize app
init();
