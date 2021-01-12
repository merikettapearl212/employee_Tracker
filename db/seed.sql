-- USE employee_tracker_db;
-- INSERT INTO
--   departments (name)
-- VALUES
-- 	("Sales"),
-- 	("Engineering"),
-- 	("Finance"),
-- 	("Legal");
  
-- INSERT INTO 
-- roles (title, salary, department_id)
-- VALUES
--   ("Sales Lead", 100000, 1),
--   ("Salesperson", 80000, 1),
--   ("Lead Engineer", 150000, 2),
--   ("Software Engineer", 120000, 2);
  
-- INSERT INTO
--   employees (first_name, last_name, role_id, manager_id)
-- VALUES
--   ('Terry', 'Bradford', 1, NULL),
--   ('Jim', 'Oconnell', 2, 1),
--   ('Dwight', 'Klein', 2, 1),
--   ('Scarlet', 'Hughes', 3, NULL),
--   ('Alice', 'Mcclure', 4, NULL);

USE employee_tracker_db;

INSERT INTO departments
  (name)
VALUES 
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO roles
  (title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Accountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

INSERT INTO employees 
  (first_name, last_name, role_id, manager_id)
VALUES
('Terry', 'Bradford', 1, NULL),
('Jim', 'Oconnell', 2, 1),
('Dwight', 'Klein', 2, 1),
('Scarlet', 'Hughes', 3, NULL),
('Alice', 'Mcclure', 4, NULL),
('Kevin', 'Dalton', 5, 5),
('Oscar', 'Cortez', 5, 5),
('Bryan', 'Wayne', 6, NULL),
('Owen', 'Bratton', 7, NULL);