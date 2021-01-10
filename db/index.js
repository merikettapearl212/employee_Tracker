const connection = require("./connection");

module.exports = {
    getDepartments() {
        return connection.query("SELECT * FROM departments");
    },
    getRoles() {
        return connection.query("SELECT * FROM roles");
    },
    getEmployees() {
        return connection.query("SELECT * FROM employees");
    },
    createDepartments(data) {
        return connection.query("INSERT INTO departments SET ?", data);

    },
    createRoles(data) {
        return connection.query("INSERT INTO roles SET ?", data);

    },
    createEmployees(data) {
        return connection.query("INSERT INTO employees SET ?", data);

    }
    // updateEmployee(data) {
    //     return connection.query("UPDATE employees SET ? WHERE ?",
    //         [
    //             {
    //                 id: data.employeeId
    //             },
    //             {
    //                 role_id: data.roleId
    //             }
    //         ]);

    
}