const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");
const conTable = require("console.table");

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

function askAction() {
    inquirer
        .prompt({
            message: "What would you like to do?",
            name: "action",
            type: "list",
            choices: [
                "VIEW_DEPARTMENTS",
                "VIEW_ROLES",
                "VIEW_EMPLOYEES",
                "CREATE_DEPARTMENT",
                "CREATE_ROLE",
                "CREATE_EMPLOYEE",
                "UPDATE_EMPLOYEE_ROLE",
                "QUIT"
                ]
        })
        .then((res) => {
            switch (res.action) {
                case "VIEW_DEPARTMENTS":
                viewDepartments();
                return;

            case "VIEW_ROLES":
                viewRoles();
                return;

            case "VIEW_EMPLOYEES":
                viewEmployees();
                return;

            case "CREATE_DEPARTMENT":
                createDepartments();
                return;

            case "CREATE_ROLE":
                createRoles();
                return;

            case "CREATE_EMPLOYEE":
                createEmployees();
                return;

            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRoles();
                return;

            case "QUIT":
                connection.end();
                return;

            default:
                connection.end();
            }

        })
}

function viewDepartments() {
    db
        .getDepartment()
        .then((results) => {
            askAction();
        });
}

function viewRoles() {
    db
        .getRoles()
        .then((results) => {
            askAction();
        })
}

function viewEmployees() {

    db
      .getEmployees()
      .then((results) => {
        console.table(results);
        askAction();
      });
}


askAction();

