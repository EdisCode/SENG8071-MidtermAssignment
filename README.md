# Online Bookstore Database Design

## Table of Contents

- [Online Bookstore Database Design](#online-bookstore-database-design)
  - [Table of Contents](#table-of-contents)
  - [1. Project Overview](#1-project-overview)
  - [2. Features](#2-features)
  - [3. Installation](#3-installation)
    - [Prerequisites](#prerequisites)
  - [4. Database Setup](#4-database-setup)
  - [5. SQL Queries for Requirements](#5-sql-queries-for-requirements)
  - [6. Books Table DDL \& DML](#6-books-table-ddl--dml)
  - [7. TypeScript Interface for Books Table](#7-typescript-interface-for-books-table)
  - [8. Running the Application](#8-running-the-application)
  - [9. Technologies Used](#9-technologies-used)
    - [Authors](#authors)
    - [Acknowledgments](#acknowledgments)

---

## 1. Project Overview

This project involves designing a database system for an online bookstore. The bookstore sells physical books, e-books, and audiobooks. Customers can browse the catalog, make purchases, and leave reviews. Authors and publishers are also part of the system.

---

## 2. Features

- **Power Writers**: Identify authors with more than X books in the same genre published within the last X years.
- **Loyal Customers**: Identify customers who have spent more than X dollars in the last year.
- **Well-Reviewed Books**: Identify books with a better user rating than average.
- **Most Popular Genre**: Determine the most popular genre by sales.
- **Recent Reviews**: Display the 10 most recent reviews posted by customers.

---

## 3. Installation

### Prerequisites

Before starting, ensure you have the following installed:

- [VirtualBox](https://www.virtualbox.org/) with a Fedora VM running.
- [PostgreSQL](https://www.postgresql.org/) - Database management system.

---

## 4. Database Setup

1. **Start PostgreSQL**:

   - Ensure your PostgreSQL server is running on your Fedora VM.

2. **Access PostgreSQL**:

   - Use a PostgreSQL client to access your PostgreSQL server.

3. **Create Database**:

   - Create the `bookstore` database.

4. **Import Database Schema**:

   - Use the provided SQL file to create tables and initial data structure.

     ```sql
     -- Create Authors Table
     CREATE TABLE Authors (
         authorId SERIAL PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         about TEXT,
         dob DATE
     );

     -- Create Publishers Table
     CREATE TABLE Publishers (
         publisherId SERIAL PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         address VARCHAR(255)
     );

     -- Create Books Table
     CREATE TABLE Books (
         bookId SERIAL PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         genre VARCHAR(100),
         publicationDate DATE,
         price DECIMAL(10, 2),
         format VARCHAR(10) CHECK (format IN ('physical', 'ebook', 'audiobook')),
         authorId INT,
         publisherId INT,
         averageRating DECIMAL(2, 1),
         FOREIGN KEY (authorId) REFERENCES Authors(authorId),
         FOREIGN KEY (publisherId) REFERENCES Publishers(publisherId)
     );

     -- Create Customers Table
     CREATE TABLE Customers (
         customerId SERIAL PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE,
         dob DATE,
         totalSpent DECIMAL(10, 2)
     );

     -- Create Reviews Table
     CREATE TABLE Reviews (
         reviewId SERIAL PRIMARY KEY,
         customerId INT,
         bookId INT,
         rating INT,
         comment TEXT,
         reviewDate DATE,
         FOREIGN KEY (customerId) REFERENCES Customers(customerId),
         FOREIGN KEY (bookId) REFERENCES Books(bookId)
     );
     ```

5. **Inserting Sample Data**:

   - Authors Table:

   ```sql
   INSERT INTO Authors (name, about, dob)
   VALUES ('E. Edikan Uwem', 'American novelist and short story writer.', '1896-05-30');

   INSERT INTO Authors (name, about, dob)
   VALUES ('Tony Stark', 'English novelist, essayist, journalist, and critic.', '1803-06-15');
   ```

   - Publishers Table:

   ```sql
   INSERT INTO Publishers (name, address)
   VALUES ('Marvel', '55 Book St, New York, NY');

   INSERT INTO Publishers (name, address)
   VALUES ('Medium Books', '956 Salamada Ave, London, UK');
   ```

   - Books Table:

   ```sql
   -- Assuming authorId and publisherId correspond to the authors and publishers inserted above.
   INSERT INTO Books (title, genre, publicationDate, price, format, authorId, publisherId, averageRating)
   VALUES ('The Great Gatsby', 'Fiction', '2000-04-10', 10.99, 'physical', 1, 1, 4.5);

   INSERT INTO Books (title, genre, publicationDate, price, format, authorId, publisherId, averageRating)
   VALUES ('1984', 'Dystopian', '1999-06-08', 15.99, 'ebook', 2, 2, 4.7);
   ```

   - Customers Table:

   ```sql
   INSERT INTO Customers (name, email, dob, totalSpent)
   VALUES ('Ade Adegbesan', 'ade@gmail.com', '1990-05-15', 1500.00);

   INSERT INTO Customers (name, email, dob, totalSpent)
   VALUES ('Nkechi Emmanuel', 'chichi@yahoo.com', '1985-08-20', 2000.00);
   ```

   - Reviews Table:

   ```sql
   -- Assuming customerId and bookId correspond to the customers and books inserted above.
   INSERT INTO Reviews (customerId, bookId, rating, comment, reviewDate)
   VALUES (1, 1, 5, 'Great book, loved the characters!', '2023-05-01');

   INSERT INTO Reviews (customerId, bookId, rating, comment, reviewDate)
   VALUES (2, 2, 4, 'Interesting and thought-provoking.', '2023-06-15');
   ```

---

## 5. SQL Queries for Requirements

(Nkechi -sql queries)

---

## 6. Books Table DDL & DML

(Ade - DDL & DML)

---

## 7. TypeScript Interface for Books Table

(typescript interface)

---

## 8. Running the Application

(running the application)

---

## 9. Technologies Used

- Database: PostgreSQL
- Tools: pgAdmin, Git (Version Control), GitHub (Code Hosting)

---

### Authors

- [Edikan Ekanem](https://github.com/EdisCode) - (Database Design, Documentation, CRUD Operations, Testing)
- [Adeoluwatomiwa Adegbesan](https://github.com/Adeoluwatomi) - (DDL/DML Scripts, CRUD Operations, Typescript Interface, Testing)
- [Nkechi Emmanuel](https://github.com/emmanuelnkechi) - (Typescript Interface, SQL Queries for Requirements, Testing)

---

### Acknowledgments

- Special thanks to **Andy Chow** & **Kevin Kang** for guidance and support.
