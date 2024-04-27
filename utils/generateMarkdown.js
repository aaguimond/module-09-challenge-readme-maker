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
// Converting the project status to a slug if it includes spaces
function convertStatusToSlug(data) {
  const convertedStatus = data.status.replace(/\s+/g, '-').toLowerCase();
  return convertedStatus
}

// Converting our media and alt values to a variable that allows us to display however many links are included
let mediaMarkdown = '';
if (data.link[0] !== 'N/A') {
  for (let i = 0; i < data.link.length; i++) {
    mediaMarkdown += `![${data.alt[i]}](${data.link[i]})\n\n`
  }
}

let tableOfContentsStart = `
## Table of Contents

[Project Status](#project-status)
`;

let tableOfContentsEnd = `
\n[Purpose](#purpose)

[Installation](#installation)

[Usage](#usage)

[Credits](#credits)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)
`
if (data.link[0] !== 'N/A') {
  tableOfContentsStart += `\n[Media of Application](#media-of-${convertStatusToSlug(data)}-application)`;
}

function generateMarkdown(data) {
  return `
  # ${data.title}

  ### ${data.description}

  ${tableOfContentsStart}
  ${tableOfContentsEnd}

  ## Project Status

  **${data.status}**

  [GitHub Repository](${data.repo})

  [Live ${data.title}](${data.site})

  ${data.link[0] !== 'N/A' ? `
  ## Media of ${data.status} Application

  ${mediaMarkdown}` : ''}

  ## Purpose

  ${data.purpose}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits[n]}

  ## License

  ${license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Please reach out to me with any questions:

  https://github.com/${data.github}/
  ${data.email}
`;
}

module.exports = generateMarkdown;
