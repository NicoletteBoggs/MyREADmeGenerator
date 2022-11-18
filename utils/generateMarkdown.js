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
  return `# ${data.title}
# Table of Contents
1. [description](#description)
2. [installation](#installation)
3. [usage](#usage)
4. [license](#license)
5. [contributing](#contributing)
6. [tests](#tests)
7. [email](#email)
8. [github](#github)
## description
${data.description}
## installation
${data.installation}
## usage
${data.usage}
## license
${data.license}
## contributing
${data.contributing}
## tests
${data.tests}
## email
${data.email}
## github
${data.github}
`;
}

module.exports = generateMarkdown;
