const inquirer = require('inquirer');
const fs = require('fs');

//import module
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const createHtml = require('./src/createHtml.js');


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
      
       const answers = await inquirer.prompt(questions);
       
        //if manager slecte answer these set of questions
        if(answers.role === "Manager"){
                const managerAns = await inquirer.prompt(managerQuestions);
                let employee = new Manager(answers.name, answers.id, answers.email, managerAns.officeNumber);
                employeesArr.push(employee);
               
                }
        //if engineer slecte answer these set of questions
        else if(answers.role === "Engineer"){
                const engineerAns = await inquirer.prompt(engineerQuestions);
                let employee = new Engineer(answers.name, answers.id, answers.email, engineerAns.github);
                employeesArr.push(employee);
               
                }
        //if intern slecte answer these set of questions
        else if(answers.role === "Intern"){
                const internAns = await inquirer.prompt(internQuestions);
                let employee = new Intern(answers.name, answers.id, answers.email, internAns.school);
                employeesArr.push(employee);
               
                }
console.log(employeesArr);

 };
        

//async function prompt add more member or create team
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
        }else{
        return writeHtml();
       }
        
}


addMemberOrCreateTeam();



// Function to write the final HTML document in dist folder
function writeHtml(employeesArr){
 
 fs.writeFile('./dist/team-profile.html', createHtml(employeesArr), (err) => {
      if (err) throw err;
      console.log('HTML document successfully created in the /dist folder.');
    });
}
