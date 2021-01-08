const connection = require("./connection");

module.exports = {
    departments() {
        return connection.query("SELECT * FROM departments");
    },
    roles() {
        return connection.query("SELECT * FROM roles");
    },
    employees() {
        return connection.query("SELECT * FROM employees");
    },
    insertDepartments(data) {
        return connection.query("INSERT INTO departments SET ?", data);

    },
    insertRoles(data) {
        return connection.query("INSERT INTO roles SET ?", data);

    },
    insertEmployee(data) {
        return connection.query("INSERT INTO employees SET ?", data);

    },
    updateEmployee(data) {
        return connection.query("UPDATE employees SET ? WHERE ?",
            [
                {
                    id: data.employeeId
                },
                {
                    role_id: data.roleId
                }
            ]);

    }
}