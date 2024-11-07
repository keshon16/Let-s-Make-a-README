// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',

    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license do you use for your project',


    },
    {
       type: 'input',
       name: 'installation',
       message: 'What are your installation instructions?',
    
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use this project?'
    },
    {
       type: 'input',
       name: 'email',
       message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('Error writing file:', 'README.md', (err) =>
        err ? console.log(err) : console.log('README.md has been created successfully!')
);
};

// TODO: Create a function to initialize app
function init() {
    console.log('Welcome to the Lets make a README!');
    inquirer.prompt(questions)
    .then((answers)  => {
        const markdownContent = generateMarkdown (answers);
     writeToFile('README.md', markdownContent);

     console.log('README.md generated successfully!');

})
.catch((error)  => {
    console.log('Error:', error);
});
}
    
    // Function call to initialize app
init();
