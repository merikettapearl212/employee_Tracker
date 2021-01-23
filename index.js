const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db = require("./db");
const connection = require("./db/connection");

const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());

function askForAction() {

    inquirer.prompt({
        message: "Choose something to do",
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
    }).then((res) => {
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

            default:
                connection.end();
        }
    })
}

function viewDepartments() {

    db.getDepartments()
        .then((results) => {
            let departmentsTable = cTable.getTable(results);
            console.table(departmentsTable);
            askForAction();
        });

}

function viewRoles() {

    db.getRoles()
        .then((results) => {
            let rolesTable = cTable.getTable(results);
            console.table(rolesTable);
            askForAction();
        });

}

function viewEmployees() {

    db.getEmployees()
        .then((results) => {
            let employeesTable = cTable.getTable(results);
            console.table(employeesTable);
            askForAction();
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
            askForAction();
        })
    })
}


function createRoles() {
    db
        .getDepartments()
        .then((departments) => {

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
                ]).then(newRole => {
                    db.createRoles(newRole).then((res) => {
                        console.log("New Role Added!")
                        askForAction();
                    })
                    
                    
                })
            })
}


// Doesnt work! >>>>>>>>>>>>>>>>>
function createEmployees() {
    db.getRoles()
        .then((roles) => {
            console.log(roles);

            const roleList = roles.map((role) => ({
                value: role.id,
                name: role.title
            }));
            db.getEmployees()
                .then((employees) => {
                    console.log(employees);

                    const employeeList = employees.map((employee) => ({
                        value: employee.id,
                        name: `${employee.first_name} ${employee.last_name}`
                    }))
                    inquirer.prompt([
                        {
                            message: "What is the employee's first name?",
                            type: "input",
                            name: "first_name",
                        },
                        {
                            message: "What is the employee's last name?",
                            type: "input",
                            name: "last_name",
                        },
                        {
                            message: "What is the role for this employee?",
                            type: "list",
                            name: "role_id",
                            choices: roleList
                        },
                        {
                            message: "Who will be this employees manager?",
                            type: "list",
                            name: "manager_id",
                            choices: employeeList
                        }
                    ]).then(newEmployee => {
                        db.insertEmployee(newEmployee).then((res) => {
                            console.log("New Employee Added!")
                            askForAction();
                        })
                    })
                })
        }
        )
}






askForAction();



