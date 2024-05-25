INSERT INTO department (department_name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 4),
    ('Salesperson', 60000, 4),
    ('Lead Engineer', 150000, 1),
    ('Software Engineer', 120000, 1),
    ('Account Manager', 160000, 2),
    ('Accountant', 125000, 2),
    ('Legal Team Lead', 250000, 3),
    ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ashley', 'Rodriguez', 1, NULL),
    ('Malia', 'Brown', 2, 1),
    ('Sarah', 'Lourd', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('John', 'Doe', 5, NULL),
    ('Kunal', 'Singh', 6, 5),
    ('Tom', 'Allen', 7, NULL),
    ('Mike', 'Chan', 8, 7);