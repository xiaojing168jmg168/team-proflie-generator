const inquirer = require('inquirer');
const fs = require('fs');

//import module
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const createHtml = require('./src/createHtml.js');

const { inherits } = require('util');


//employees array
let employeesArr = [];
//all employee's questions
const questions = [
        {
        type: "list",
        name: "role",
        message: "Which type of team member would you like to add?",
        choices: ["Manager", "Engineer", "Intern"]
        },
        {
        type: "input",
        name: "name",
        message: "What is the name of this employee?"
        },
        {
        type: "input",
        name: " id",
        message: "What is this employee id?"
        },
        {
        type: "input",
        name: "email",
        message: "What is this employee email?"
        },
        ];

//Questions for manager role
const managerQuestions = [
        {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
        }
        ]

//Questions for engineer role
const engineerQuestions = [
        {
        type: "input",
        name: "github",
        message: "What's the engineer's GitHub unserName?"
        }
        ]

//Questions for intern role
const internQuestions = [
        {
        type: "input",
        name: "school",
        message: "What school is the intern from?"
        }
        ]

//create new employee
const newEmployee = async() => {
await inquirer.prompt(questions)
.then((response) => {
let name = response.name;
let id = response.id;
let email = response.email;
let role = response.role;
let officeNumber;
let github;
let school;

if(role === "Manager"){
inquirer.prompt(managerQuestions)
.then((response) => {
officeNumber = response.officeNumber;
let employee = new Manager(name, id, email, officeNumber);
employeesArr.push(employee);

});
}

else if(role === "Engineer"){
inquirer.prompt(engineerQuestions)
.then((response) => {
github = response.github;
let employee = new Engineer(name, id, email, github);
employeesArr.push(employee);

});
}

else if(role === "Intern"){
inquirer.prompt(internQuestions)
.then((response) => {
school = response.school;
let employee = new Intern(name, id, email, school);
employeesArr.push(employee);
});
}
});
};

const addMemberOrCreateTeam = async() =>{
     await newEmployee();
const addMembers = await inquirer
.prompt([
{
name: "addMember",
type: "list",
choices: ["Add a new member", "Create team"],
message: "What would you like to do next?"
}
])
if(addMembers.addMember === "Add a new member"){
return newEmployee();
}
return writeHtml();
}



addMemberOrCreateTeam();


// Function to write the final HTML document in dist folder
function writeHtml(employeesArr){
 
 fs.writeFile('./dist/team-profile.html', createHtml(employeesArr), (err) => {
      if (err) throw err;
      console.log('HTML document successfully created in the /dist folder.');
    });
}
