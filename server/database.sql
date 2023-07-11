CREATE DATABASE reminder;

CREATE TABLE users(
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
  user_id BIGINT NOT NULL,
  first_name VARCHAR (255) NOT NULL,
  last_name VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  school VARCHAR (255) NOT NULL,
  department VARCHAR (255) NOT NULL,
  phone_number BIGINT NOT NULL,
  date DATE
 CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id),
);

CREATE TABLE courses(
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  course_name VARCHAR (255) NOT NULL,
  course_code VARCHAR (255) NOT NULL,
  course_unit INT NOT NULL,
  date DATE
CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id),
CONSTRAINT fk_lecturers
    FOREIGN KEY(lecturer_id)
    REFERENCES lecturers(id),
);



CREATE TABLE assignments(
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  lecturer_id INT NOT NULL,
  assignment VARCHAR (255) NOT NULL,
  date DATE
CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id),
CONSTRAINT fk_lecturers
    FOREIGN KEY(lecturer_id)
    REFERENCES lecturers(id),
);

CREATE TABLE exams(
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  lecturer_id INT NOT NULL,
  test VARCHAR (255) NOT NULL,
  date DATE
CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id),
CONSTRAINT fk_lecturers
    FOREIGN KEY(lecturer_id)
    REFERENCES lecturers(id),
);
ss


CREATE TABLE reminders(
  id BIGINT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  lecturer_id BIGINT NOT NULL,
  reminder VARCHAR (255) NOT NULL,
  date DATE
CONSTRAINT fk_users
    FOREIGN KEY(user_id)
    REFERENCES users(id),
);
