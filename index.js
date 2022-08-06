const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
  {
      type: "input",
      name: "title",
      message: "Set a name for your proyect",
      validate: title =>{
        if(title){
          return true;
        }else{
          console.log("Please enter the title of your project");
          return false
        }
      }
  },
  {
      type: "input",
      name: "description",
      message: "Write the project description",
      validate: description =>{
        if (description){
          return true;
        }else{
          console.log("Please write a project description");
          return false;
        }
      }
  },
  {
      type: "input",
      name: "install",
      message: "Steps to install the project",
      validate: install =>{
        if(install){
          return true;
        }else{
          console.log("Please add installation steps");
          return false;
        }
      }    
  },
  {
      type: "input",
      name: "usage",
      message: "What are the usages of your proyect?",
      validate: usage =>{
        if (usage){
          return true;
        }else{
          console.log("Please add the usages for your proyect");
          return false;
        }
      }
  },
  {
      type: "list",
      name: "license",
      message: "What license will your project use?",
      choices: [ "MIT", "GPL 3.0", "Apache 2.0","None"],
      validate: licence = () => {
        if (licence){
          return true;
        }else{
          console.log("Please select an option")
          return false;
        }
      }

  },
  {
      type: "input",
      name: "collab",
      message: "Collaborators names? ",
      validate: collab =>{
        if(collab){
          return true;
        }else{
          console.log("Please add at least one collaborator");
          return false;
        }
      }
  },
  {
      type: "checkbox",
      name: "badges",
      message: "What technologies do you use?",
      choices:["None","HTML","CSS","Javascript","Node"],
      validate: badges = () => {
        if(badges){
          return true;     
        }else{
          console.log("Please select an option.")
          return false;
        }
      }
  },
  {
      type: "input",
      name: "github",
      message: "Introduce your Github profile:",
      validate: github =>{
        if(github){
          return true;
        }else{
          console.log("Please add your Github user.");
          return false;
        }
      }
  },
  {
      type: "input",
      name: "email",
      message: "Introduce your email:",
      validate: email =>{
        if(email){
          return true;
        }else{
          console.log("Please add your email address.");
          return false;
        }
      }
  },

];


// TODO: Create a function to write README file
function writeToFile(markDown,data) {

  let fileName = `${data.title}`;
  fileName = fileName.split(" ").join("");

  fs.writeFile(`${fileName}.md`, markDown, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(function(answer){
    let markDown = generateMarkdown(answer);
    writeToFile(markDown,answer)
  });
}

// Function call to initialize app
init();
