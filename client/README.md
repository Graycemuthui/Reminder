# Reminder

- This is a reminder app that helps remind students of their classes, assignments, and exams.

## Setup

- Create the client and server folders
- Start by downloading the dependencies
- We will start with the server side first
- Create a index.js file
- Create a .gitignore file
- Create a package.json file
- Run 'npm init' to create a package.json file
- Install the dependencies
- Run 'npm install'
- Create a .gitignore file
- Run 'npm i express pg cors'
- Install nodemon
- Run 'npm i -D nodemon'
- Call the dependencies in the index.js file(express, cors, pg)
- Add middleware

```
app.use(cors());

```

- Call the express.json() middleware

```
app.use(express.json());

```

- Create the database
- Create a database.sql file

```
CREATE DATABASE reminder;

CREATE DATABASE reminder;

CREATE TABLE students(
  id BIGINT PRIMARY KEY,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  school VARCHAR (255) NOT NULL,
  department VARCHAR (255) NOT NULL,
  phone_number BIGINT NOT NULL,
  date DATE
);

CREATE TABLE lecturers(
  id BIGINT PRIMARY KEY,
  student_id BIGINT NOT NULL,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  school VARCHAR (255) NOT NULL,
  department VARCHAR (255) NOT NULL,
  phone_number BIGINT NOT NULL,
  date DATE
);

ALTER TABLE lecturers
ADD CONSTRAINT fk_students
    FOREIGN KEY(student_id)
    REFERENCES students(id);

CREATE TABLE courses(
  id BIGINT PRIMARY KEY,
  student_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  course_name VARCHAR (255) NOT NULL,
  course_code VARCHAR (255) NOT NULL,
  course_unit INT NOT NULL,
  date DATE
);

ALTER TABLE courses
ADD CONSTRAINT fk_students
    FOREIGN KEY(student_id)
    REFERENCES students(id);

ALTER TABLE courses
ADD CONSTRAINT fk_lecturers
    FOREIGN KEY (lecturer_id)
    REFERENCES lecturers(id);

CREATE TABLE assignments(
  id BIGINT PRIMARY KEY,
  student_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  course_id BIGINT NOT NULL,
  date DATE
);

ALTER TABLE assignments
ADD CONSTRAINT fk_students
    FOREIGN KEY(student_id)
    REFERENCES students(id);

ALTER TABLE assignments
ADD CONSTRAINT fk_lecturers
    FOREIGN KEY (lecturer_id)
    REFERENCES lecturers(id);

ALTER TABLE assignments
ADD CONSTRAINT fk_courses
    FOREIGN KEY (course_id)
    REFERENCES courses(id);

CREATE TABLE classes(
  id BIGINT PRIMARY KEY,
  student_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  course_id BIGINT NOT NULL,
  date DATE
);

ALTER TABLE classes
ADD CONSTRAINT fk_students
    FOREIGN KEY(student_id)
    REFERENCES students(id);

ALTER TABLE classes
ADD CONSTRAINT fk_lecturers
    FOREIGN KEY (lecturer_id)
    REFERENCES lecturers(id);

ALTER TABLE classes
ADD CONSTRAINT fk_courses
    FOREIGN KEY (course_id)
    REFERENCES courses(id);

CREATE TABLE exams(
  id BIGINT PRIMARY KEY,
  student_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  course_id BIGINT NOT NULL,
  date DATE
);

ALTER TABLE exams
ADD CONSTRAINT fk_students
    FOREIGN KEY(student_id)
    REFERENCES students(id);

ALTER TABLE exams
ADD CONSTRAINT fk_lecturers
    FOREIGN KEY (lecturer_id)
    REFERENCES lecturers(id);

ALTER TABLE exams
ADD CONSTRAINT fk_courses
    FOREIGN KEY (course_id)
    REFERENCES courses(id);

CREATE TABLE reminders(
  id BIGINT PRIMARY KEY,
  student_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  course_id BIGINT NOT NULL,
  reminder VARCHAR (255) NOT NULL,
  date DATE
);

ALTER TABLE reminders
ADD CONSTRAINT fk_students
    FOREIGN KEY(student_id)
    REFERENCES students(id);

ALTER TABLE reminders
ADD CONSTRAINT fk_lecturers
    FOREIGN KEY (lecturer_id)
    REFERENCES lecturers(id);

ALTER TABLE reminders
ADD CONSTRAINT fk_courses
    FOREIGN KEY (course_id)
    REFERENCES courses(id);


```

## Installation

- Clone the repository
- Install the dependencies
- Run the app

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)

## Run the app

- Run `npm install` to install the dependencies
- Run `npm start` to start the app
- Run `npm run build` to build the app
- Run `npm run test` to test the app
