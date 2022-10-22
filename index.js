const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./src/page-template');


// TODO: CODE GOES HERE

const myTeam = [];

function init() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name of the team manager',
      name: 'managerName'
    },
    {
      type: 'input',
      message: 'Enter the id of the team manager',
      name: 'managerId'
    },
    {
      type: 'input',
      message: 'Enter the email of the team manager',
      name: 'managerEmail'
    },
    {
      type: 'input',
      message: 'Enter the office number of the team manager',
      name: 'managerOffice'
    },
  ]).then(response => {
    const teamManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice);
    myTeam.push(teamManager);
    addEmployee();
  })
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'Select an employee to add',
      name: 'employee',
      choices: [
        'Engineer',
        'Intern',
        'None'
      ]
    }
  ]).then(response => {
    if (response.employee === 'Engineer') {
      addEngineer();
    } else if (response.employee === 'Intern') {
      addIntern();
    } else {
      makeTeam();
    }
  })
}

function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name of the Engineer',
      name: 'engineerName'
    },
    {
      type: 'input',
      message: 'Enter the id of the Engineer',
      name: 'engineerId'
    },
    {
      type: 'input',
      message: 'Enter the email of the Engineer',
      name: 'engineerEmail'
    },
    {
      type: 'input',
      message: 'Enter the gitHub of the Engineer',
      name: 'engineerGithub'
    },
  ]).then(response => {
    const teamEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
    myTeam.push(teamEngineer);
    addEmployee();
  })
}

function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter the name of the Intern',
      name: 'internName'
    },
    {
      type: 'input',
      message: 'Enter the id of the Intern',
      name: 'internId'
    },
    {
      type: 'input',
      message: 'Enter the email of the Intern',
      name: 'internEmail'
    },
    {
      type: 'input',
      message: 'Enter the school of the Intern',
      name: 'internSchool'
    },
  ]).then(response => {
    const teamIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
    myTeam.push(teamIntern);
    addEmployee();
  })
}

function makeTeam() {
  fs.writeFileSync('dist/team.html', team(myTeam));
}

init();