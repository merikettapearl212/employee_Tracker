const inquirer = require("inquirer");
const db = require("./db");
const connection = require("./db/connection");
const conTable = require("console.table");

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

function askForAction() {
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
            switch (res.action){

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

                default:
                    connection.end();
                }

        })
}

function viewDepartments() {
    db
        .getDepartments()
        .then((results) => {
            let departmentsTable = conTable.getTable(results);
            console.table(departmentsTable);
        });
}

function viewRoles() {
    db
        .getRoles()
        .then((results) => {
            let rolesTable = conTable.getTable(results);
            console.table(rolesTable);
            
        });
}

function viewEmployees() {

    db
      .getEmployees()
      .then((results) => {
        console.table(results);
      });
}

function createDepartments() {
    inquirer.prompt([
        {
            message: "What department would you like to create?",
            type: "input",
            name: "name",
        }
    ]).then(newDepartment => {
        db.createDepartments(newDepartment).then((res) => {
            console.log("New Department Added!")
            
        })
    })
}

function createRoles() {
    db
    .getDepartments()
    .then((departments) => {

        console.log(departments);

        const departmentChoices = departments.map((department) => ({
            value: department.id,
            name: department.name
        }))

        inquirer
        .prompt([
            {
                message: "What department is this role for?",
                type: "list",
                name: "department_id",
                choices: departmentChoices
            },
            {
                message: "What is the title of this role?",
                type: "input",
                name: "title",
            },
            {
                message: "What is the salary for this role?",
                type: "input",
                name: "salary",
            }
        ]).then(function (results) {
            db
                .createRoles(results)

        });
    })
}


// function createEmployees() {

// }


askForAction();

// db.getDepartments().then((results) => {
//     console.log(results);
// });