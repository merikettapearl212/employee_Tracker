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
                    
                case "CREATE_ROLE":
                    createRole();
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
            console.table(results);
        });
}

function viewRoles() {
    db
        .getRoles()
        .then((results) => {
            console.table(results);
        });
}

function viewEmployees() {

    db
      .getEmployees()
      .then((results) => {
        console.table(results);
      });
}

// function createRole(){
//     db.getDepartments()
//     .then((departments)=>{

//         inquirer
//             .prompt([
//                 {
//                     message:"what department is this role for?",
//                     type:"list",
//                     name:"department_id",
//                     choices:departments.map((department)=>({
//                         value:department.department_id,
//                         name:department.name
//                     }))
//                 },
//                 {
//                     message:"what is the title of the new role",
//                     type:"input",
//                     name:"title",
//                 },
//                 {
//                     message:"what is the salary of the new role",
//                     type:"input",
//                     name:"salary",
//                 }
//             ])
//             .then((res)=>{
//                 console.table(res);
//                 askForAction();
//             });

//         })
//     };

// function addEmployee(){
//     db.getEmployees()
//     .then((employees)=>{
//         inquirer
//             .prompt([
//                 {
//                     message:"what is the employee first name?",
//                     type:"input",
//                     name:"first_name",
//                 },
//                 {
//                     message:"what is the employee last name?",
//                     type:"input",
//                     name:"last_name",

//                 },
//                 {
//                     message:"what is the role of the employee?",
//                     type:"list",
//                     name:"role_id",
//                     choices:""
//                 }
//             ])
//     })
// }


askForAction();

