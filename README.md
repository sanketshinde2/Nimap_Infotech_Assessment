# Nimap Infotech Assessment

This repository contains solutions to the assessment tasks for Nimap Infotech. The tasks are implemented using Node.js and cover a range of functionalities. Below is an overview of the tasks included:

## Table of Contents

1. [Node.js Print Files](#nodejs-print-files)
2. [Node.js JSON Cleaning](#nodejs-json-cleaning)
3. [Node.js REST GET Simple](#nodejs-rest-get-simple)
4. [Node.js Math Parse](#nodejs-math-parse)
5. [Simple Password](#simple-password)

---

## Node.js Print Files

### Description
A program to list and print the contents of files in a specified directory.

### Features
- Reads a directory and lists all files.
- Prints the content of each file.

### How to Run
```bash
node printFiles.js <directory_path>
```

---

## Node.js JSON Cleaning

### Description
A script to clean and format JSON data by removing unwanted properties or entries.

### Features
- Parses JSON data.
- Removes specified keys or entries based on criteria.
- Outputs clean and formatted JSON.

### How to Run
```bash
node jsonCleaning.js <input_json_file>
```

---

## Node.js REST GET Simple

### Description
A simple RESTful API to handle GET requests.

### Features
- Handles GET requests to retrieve data.
- Responds with predefined or dynamic data.

### How to Run
1. Start the server:
   ```bash
   node restGetSimple.js
   ```
2. Make a GET request using a tool like `curl` or Postman:
   ```bash
   curl http://localhost:3000/<endpoint>
   ```

---

## Node.js Math Parse

### Description
A program to parse and evaluate mathematical expressions.

### Features
- Accepts mathematical expressions as input.
- Evaluates and returns the result.

### How to Run
```bash
node mathParse.js "<math_expression>"
```

Example:
```bash
node mathParse.js "3+5*2"
```

---

## Simple Password

### Description
A utility to validate the strength of passwords based on predefined criteria.

### Features
- Checks for minimum length, uppercase, lowercase, digits, and special characters.
- Provides feedback on password strength.

### How to Run
```bash
node simplePassword.js "<password>"
```

Example:
```bash
node simplePassword.js "P@ssw0rd123"
```

---

## Repository Structure
```
Nimap_Infotech_Assessment/
├── printFiles.js
├── jsonCleaning.js
├── restGetSimple.js
├── mathParse.js
├── simplePassword.js
└── README.md
```

## Requirements
- Node.js (version 12 or higher)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/sanketshinde2/Nimap_Infotech_Assessment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Nimap_Infotech_Assessment
   ```
3. Install dependencies (if any):
   ```bash
   npm install
   ```

