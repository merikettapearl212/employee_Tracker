const connection = require("./connection");

module.exports = {
    getDepartments() {
        return connection.query("SELECT * FROM departments");
    },
    getRoles() {
        return connection.query("SELECT * FROM roles");
        // `SELECT
        // roles.role_id,
        // roles.title,
        // roles.salary,
        // departments.name,
        // departments.department_id
        // FROM roles
        // LEFT JOIN departments on roles.department_id = departments.department_id`);
    },
    getEmployees() {
        return connection.query("SELECT * FROM employees");
        // `SELECT
        // employees.id,
        // employees.first_name,
        // employees.last_name,
        // roles.title,
        // roles.salary,
        // departments.name,
        // FROM employees
        // LEFT JOIN roles ON employees.role_id = roles.role_id
        // LEFT JOIN departments ON roles.department_id = departments.id`);
        
    },
    createDepartments(data) {
        return connection.query("INSERT INTO departments SET ?", data);

    },
    createRoles(data) {
        return connection.query("INSERT INTO roles SET ?", data);

    },
    createEmployees(data) {
        return connection.query("INSERT INTO employees SET ?", data);

    },
    updateEmployee(data) {
        return connection.query("UPDATE employees SET ? WHERE ?",
            [
                {
                    role_id: data.role_id,
                },
                {
                    id: data.id
                }
            ]);
    }
    
}