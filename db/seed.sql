USE employee_trackerDB;
INSERT INTO
  departments (name)
VALUES
  ("HR"),
  ("Accounting"),
  ("Marketing"),
  ("Engineering");
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ("Manager", 90000, 1);
INSERT INTO
  employees (first_name, last_name, role_id, manager_id)
VALUES
  ("Meagan", "James", 1, NULL);