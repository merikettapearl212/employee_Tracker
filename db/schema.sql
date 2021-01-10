DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE departments (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
    id INT unsigned AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY(id) REFERENCES departments(id) on delete CASCADE
);

CREATE TABLE employees (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT unsigned NOT NULL,
    CONSTRAINT fk_role_id FOREIGN KEY(role_id) REFERENCES roles(id) on delete CASCADE,
    manager_id INT unsigned,
    CONSTRAINT fk_manager_id FOREIGN KEY(manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

