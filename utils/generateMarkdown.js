function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description

  ${data.description}


  ## Installation
  
  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contributions
  
  ${data.contributions}


  ## Tests
  
  ${data.tests}
  

  ## License
  
  ${data.license}
  

  ## Questions
  
  Have questions about this project? Contact me!
  Email me at: ${data.email},
  or find me on GitHub here: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
