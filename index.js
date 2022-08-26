const inquirer = require("inquirer");
const fs = require("fs");
const generateEmployeeInfo = require("./generateEmployeeInfo");

const questions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "ManagerName"
    },
    {
        type: "input",
        message: "Enter manager's position.",
        name: "ManagerPosition"
    },
    {
        type: "input",
        message: "Enter manager's email address.",
        name: "ManagerEmail"
    },
    {
        type: "input",
        message: "Enter manager's office number.",
        name: "OfficeNumber"
    },
    {
        type: "input",
        message: "Enter manager's Id.",
        name: "ManagerId"
    },
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "EngineerName"
    },
    {
        type: "input",
        message: "Enter engineer's position.",
        name: "EngineerPosition"
    },
    {
        type: "input",
        message: "Enter engineer's email address.",
        name: "EngineerEmail"
    },
    {
        type: "input",
        message: "Enter engineer's Id.",
        name: "EngineerId"
    },
    {
        type: "input",
        message: "What is the intern's name?",
        name: "InternName"
    },
    {
        type: "input",
        message: "Enter intern's position.",
        name: "InternPosition"
    },
    {
        type: "input",
        message: "Enter intern's email address.",
        name: "InternEmail"
    },
    {
        type: "input",
        message: "What is the intern's school name?",
        name: "InternSchool"
    },
    {
        type: "input",
        message: "Enter intern's Id.",
        name: "InternId"
    },
];


function writeToFile(fileName, data) {
    const teamProfile = generateEmployeeInfo(data);
    fs.writeFile(fileName, teamProfile, function (err) {
        if (err) {
            return console.log(err)
        }
    console.log("Your New Team Profile Has Been Updated!")
    });
}


function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        const fileName = "index.html";
        writeToFile(fileName, data)
    });
}



init();