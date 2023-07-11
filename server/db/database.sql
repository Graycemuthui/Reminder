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
