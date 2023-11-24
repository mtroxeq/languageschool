-- Create the database
CREATE DATABASE IF NOT EXISTS jezyki;

-- Switch to the jezyki database
USE jezyki;

-- Create the students table
CREATE TABLE IF NOT EXISTS students (
    'id' INT AUTO_INCREMENT PRIMARY KEY,
    'name' VARCHAR(100) NOT NULL,
    'lastName' VARCHAR(100) NOT NULL,
    'password' VARCHAR(255) NOT NULL,
    'email' VARCHAR(255) NOT NULL,
    'language' VARCHAR(100) NOT NULL,
    'level' VARCHAR(50) NOT NULL
);

