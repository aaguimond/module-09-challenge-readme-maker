// Packages required for our application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

// Storing our license names and shorthand values
const licenseChoices = {
    "Academic Free License v3.0": "AFL-3.0",
    "Apache license 2.0": "Apache-2.0",
    "Artistic license 2.0": "Artistic-2.0",
    "Boost Software License 1.0": "BSL-1.0",
    'BSD 2-clause "Simplified" license': "BSD-2-Clause",
    'BSD 3-clause "New" or "Revised" license': "BSD-3-Clause",
    "BSD 3-clause Clear license": "BSD-3-Clause-Clear",
    'BSD 4-clause "Original" or "Old" license': "BSD-4-Clause",
    "BSD Zero-Clause license": "0BSD",
    "Creative Commons license family": "CC",
    "Creative Commons Zero v1.0 Universal": "CC0-1.0",
    "Creative Commons Attribution 4.0": "CC-BY-4.0",
    "Creative Commons Attribution ShareAlike 4.0": "CC-BY-SA-4.0",
    "Do What The F*ck You Want To Public License": "WTFPL",
    "Educational Community License v2.0": "ECL-2.0",
    "Eclipse Public License 1.0": "EPL-1.0",
    "Eclipse Public License 2.0": "EPL-2.0",
    "European Union Public License 1.1": "EUPL-1.1",
    "GNU Affero General Public License v3.0": "AGPL-3.0",
    "GNU General Public License family": "GPL",
    "GNU General Public License v2.0": "GPL-2.0",
    "GNU General Public License v3.0": "GPL-3.0",
    "GNU Lesser General Public License family": "LGPL",
    "GNU Lesser General Public License v2.1": "LGPL-2.1",
    "GNU Lesser General Public License v3.0": "LGPL-3.0",
    "ISC": "ISC",
    "LaTeX Project Public License v1.3c": "LPPL-1.3c",
    "Microsoft Public License": "MS-PL",
    "MIT": "MIT",
    "Mozilla Public License 2.0": "MPL-2.0",
    "Open Software License 3.0": "OSL-3.0",
    "PostgreSQL License": "PostgreSQL",
    "SIL Open Font License 1.1": "OFL-1.1",
    "University of Illinois/NCSA Open Source License": "NCSA",
    "The Unlicense": "Unlicense",
    "zLib License": "Zlib",
    "N/A": "N/A"
}

// Creating an array of license names for our inquirer license list choices
const licenseNames = Object.keys(licenseChoices);
const licenseQuestionChoices = licenseNames.map(name => ({
    name: `${name} (${licenseChoices[name]})`,
    value: licenseChoices[name]
}));

// Inquirer questions for our README generator
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
        name: 'image',
        message: 'Please input any links to images for your project, separating each with a comma, or if there are none, press enter or enter "N/A".',
        default: 'N/A',
        filter: function(value) {
            return value.split(',').map(image => image.trim());
        }
    },
    {
        type: 'input',
        name: 'alt',
        message: 'Please input any alt text for your respective images, separating each with a comma, or if there is none, press enter or enter "N/A".',
        default: 'N/A',
        filter: function(value) {
            return value.split(',').map(alt => alt.trim());
        }   
    },
    {
        type: 'input',
        name: 'video',
        message: 'Please input any links to video for your project, separating each with a comma, or if there are none, press enter or enter "N/A".',
        default: 'N/A',
        filter: function(value) {
            return value.split(',').map(video => video.trim());
        }
    },
    {
        type: 'input',
        name: 'videoText',
        message: 'Please input text to describe the respective video links for your project, separating each with a comma, or if there are none, press enter or enter "N/A".',
        default: 'N/A',
        filter: function(value) {
            return value.split(',').map(videoText => videoText.trim());
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
        type: 'list',
        name: 'license',
        message: 'What license is your project under?', 
        choices: licenseQuestionChoices
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

// Writing the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if (error) {
            console.error('There was an error writing the README file: ', error);
        } else {
            console.log('README file was successfully created');
        }
    });
}

// Initializing our application
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

// Calling our initialization function
init();
