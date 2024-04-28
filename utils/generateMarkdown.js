// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('entire media', data.media)
  console.log('media index 0', data.media[0])

  let mediaMarkdown = '';
  if (data.media[0] !== 'N/A') {
    for (let i = 0; i < data.media.length; i++) {
      mediaMarkdown += `![${data.alt[i]}](${data.media[i]})\n\n`
    }
  }

  let creditsMarkdown = '';
  for (let i = 0; i < data.credits.length; i++) {
    creditsMarkdown += `* ${data.credits[i]}\n`
  }

  let tableOfContentsStart = `
## Table of Contents

[Project Status](#project-status)
`;

let tableOfContentsEnd = `
[Purpose](#purpose)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)
`

  if (data.media[0] !== 'N/A') {
    tableOfContentsStart += `\n[Media of Application](#media-for-application)`;
  }

  return `
# ${data.title}

### ${data.description}

${tableOfContentsStart}
${tableOfContentsEnd}

## Project Status

**${data.status}**

[GitHub Repository](${data.repo})

[Live ${data.title}](${data.site})

${data.media[0] !== 'N/A' ? `
## Media for Application

${mediaMarkdown}` : ''}

## Purpose

${data.purpose}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${creditsMarkdown}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Please reach out to me with any questions:

- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
