# Splitpanunga

This is the clone of Splitwise that I wanted to create of my own style

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

1) ReactJS: 

      -ubuntu: https://www.zeolearn.com/magazine/setup-react-ubuntu

      -windows:  https://www.liquidweb.com/kb/install-react-js-windows/

2) NodeJS: https://nodejs.org/en/download/

3) Sequelize for postgreSQL: https://sequelize.org/master/manual/getting-started.html

4) PostgreSQL: https://www.postgresql.org/docs/9.3/tutorial-install.html


### Installing

After installing react on your computer, open it using terminal and install the dependencies needed. (both frontend and backend)

```
npm install
```

## Setup postgres Database and tables
Run the following commands from the pgAdmin Query tool.
#### Create database
```
CREATE DATABASE test
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE test
    IS 'test pg';
```
#### Create Tables
```
CREATE TABLE users (
id serial PRIMARY KEY,
name TEXT NOT NULL,
email VARCHAR ( 255 ) UNIQUE NOT NULL,
password VARCHAR ( 50 ) NOT NULL,
mobile_number TEXT NOT NULL,
status BOOLEAN,
is_email_verified BOOLEAN,
is_phone_verified BOOLEAN
);


CREATE TABLE payments (
user_id INT NOT NULL,
owe_id INT NOT NULL,
amount REAL NOT NULL,
created_at TIMESTAMP,
description TEXT NOT NULL,
PRIMARY KEY (user_id, owe_id),
FOREIGN KEY (user_id)
  REFERENCES users (id),
FOREIGN KEY (owe_id)
  REFERENCES users (id));

CREATE TABLE paymentsDone (
user_id INT NOT NULL,
owe_id INT NOT NULL,
amount REAL NOT NULL,
FOREIGN KEY (user_id)
  REFERENCES users (id),
FOREIGN KEY (owe_id)
  REFERENCES users (id));
```


## Built With

* [ReactJs](https://reactjs.org/)
* [NodeJs](https://nodejs.org/en/) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

## Acknowledgments
* Inspiration - Splitwise.
* Refereance - There were lot of references made and I would like to thank everyone who helped me in person and stackoverflow answers.
