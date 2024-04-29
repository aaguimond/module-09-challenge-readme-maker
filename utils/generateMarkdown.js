// A single function to return the license badge for the project
function renderLicenseBadge(license) {
  if (!license || license === 'N/A') {
    return ''
  } else {
    const formatLicense = license.replace(/-/g, '');
    return `![License](https://img.shields.io/badge/license-${formatLicense}-blue.svg)`;
}}

// A single function to return the license text and link within the markdown file
function renderLicenseSection(license) {
  if (!license || license === 'N/A') {
    return ''
  } else {
    return `This project is licensed under the [${license}](https://opensource.org/licenses/${license}) license.`
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license)

  const licenseSection = renderLicenseSection(data.license)

  let imageMarkdown = '';
  if (data.image[0] !== 'N/A') {
    for (let i = 0; i < data.image.length; i++) {
      imageMarkdown += `![${data.alt[i]}](${data.image[i]})\n\n`
    }
  }

  let videoMarkdown = '';
  if (data.video[0] !== 'N/A') {
    for (let i = 0; i < data.video.length; i++) {
      videoMarkdown += `[${data.videoText[i]}](${data.video[i]})\n\n`
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

  if (data.image[0] !== 'N/A' || data.video[0] !== 'N/A') {
    tableOfContentsStart += `\n[Media of Application](#media-for-application)`;
  }

  return `
# ${data.title}

${licenseBadge}

### ${data.description}

${tableOfContentsStart}
${tableOfContentsEnd}

## Project Status

**${data.status}**

[GitHub Repository](${data.repo})

[Live ${data.title}](${data.site})

${(data.image[0] !== 'N/A' || data.video[0] !== 'N/A') ? `
## Media for Application

${imageMarkdown}
${videoMarkdown}` : ''}

## Purpose

${data.purpose}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${creditsMarkdown}

## License

${licenseSection}

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
