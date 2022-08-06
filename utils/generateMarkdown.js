// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// LOGOS de Licencia SHIED IO 
function renderLicenseBadge(license) {
  let badgeLicense = " ";
  if (license === "MIT") {
    badgeLicense = "![License](https://img.shields.io/badge/License-MIT-red)"
  } else if (license === "GPL 3.0"){
    badgeLicense = "![License](https://img.shields.io/badge/License-GPL%20v3.0-red)"
  } else if (license === "Apache 2.0"){
    badgeLicense = "![License](https://img.shields.io/badge/License-Apche%202.0-red)"
  } else {
    badge = ""
  }
  return badgeLicense
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// LINK a los términos de la licencia
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/"
  }  else if (license === "GPL 3.0") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license === "Apache 2.0") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else {
    licenseLink = ""
  }
  return licenseLink;
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// LINK al contenido de la licencia
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "MIT") {
    licenseSection = `MIT License

    Copyright (c) [2022]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`

  } else if (license === "GPL 3.0") {
    licenseSection = `                     GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007

    Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.

            Preamble

    The GNU General Public License is a free, copyleft license for
    software and other kinds of works.

    The licenses for most software and other practical works are designed
    to take away your freedom to share and change the works.  By contrast,
    the GNU General Public License is intended to guarantee your freedom to
    share and change all versions of a program--to make sure it remains free
    software for all its users.  We, the Free Software Foundation, use the
    GNU General Public License for most of our software; it applies also to
    any other work released this way by its authors.  You can apply it to
    your programs, too.

    When we speak of free software, we are referring to freedom, not
    price.  Our General Public Licenses are designed to make sure that you
    have the freedom to distribute copies of free software (and charge for
    them if you wish), that you receive source code or can get it if you
    want it, that you can change the software or use pieces of it in new
    free programs, and that you know you can do these things.

    To protect your rights, we need to prevent others from denying you
    these rights or asking you to surrender the rights.  Therefore, you have
    certain responsibilities if you distribute copies of the software, or if
    you modify it: responsibilities to respect the freedom of others.

    For example, if you distribute copies of such a program, whether
    gratis or for a fee, you must pass on to the recipients the same
    freedoms that you received.  You must make sure that they, too, receive
    or can get the source code.  And you must show them these terms so they
    know their rights.

    Developers that use the GNU GPL protect your rights with two steps:
    (1) assert copyright on the software, and (2) offer you this License
    giving you legal permission to copy, distribute and/or modify it.

    For the developers' and authors' protection, the GPL clearly explains
    that there is no warranty for this free software.  For both users' and
    authors' sake, the GPL requires that modified versions be marked as
    changed, so that their problems will not be attributed erroneously to
    authors of previous versions.

    Some devices are designed to deny users access to install or run
    modified versions of the software inside them, although the manufacturer
    can do so.  This is fundamentally incompatible with the aim of
    protecting users' freedom to change the software.  The systematic
    pattern of such abuse occurs in the area of products for individuals to
    use, which is precisely where it is most unacceptable.  Therefore, we
    have designed this version of the GPL to prohibit the practice for those
    products.  If such problems arise substantially in other domains, we
    stand ready to extend this provision to those domains in future versions
    of the GPL, as needed to protect the freedom of users.

    Finally, every program is threatened constantly by software patents.
    States should not allow patents to restrict development and use of
    software on general-purpose computers, but in those that do, we wish to
    avoid the special danger that patents applied to a free program could
    make it effectively proprietary.  To prevent this, the GPL assures that
    patents cannot be used to render the program non-free.

    The precise terms and conditions for copying, distribution and
    modification follow link https://choosealicense.com/licenses/gpl-3.0/
    `
  } else if (license === "Apache 2.0") {
    licenseSection = `                                 Apache License
    Version 2.0, January 2004
    http://www.apache.org/licenses/

    Copyright [2022]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  } else {
    licenseSection = ""
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)  {
  return `# ${data.title} 
 ## Description:
 ### ${data.description}
 #
  ## Table of Contents:
  - ### [Installation](#installation)
  - ### [Usage](#usage)
  - ### [License](#license)
  - ### [Contribution](#collaborators)
  - ### [Technologies](#tools)
  - ### [Question](#questions)
  #
  ## Installation:
  ### Please follow the next methodology to use my repository: 
  ### ${data.install}
  #
  ## Usage:
  ### ${data.usage}
  #
  ## Technologies Used:
  ### ${data.badges}
  #
  ## License: ${data.license}
  ### ${renderLicenseBadge(data.license)}
  ### License Info: ${renderLicenseLink(data.license)}
  ### ${renderLicenseSection(data.license)}
  #
  ## Collaborators:
  ### ${data.collab}
  #
  ## Questions:
  ### Github Profile: ${data.Github}
  ### For aditional support or contributions reach me via email: ${data.email}
`
}

module.exports = generateMarkdown;
