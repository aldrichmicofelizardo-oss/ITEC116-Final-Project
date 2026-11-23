
# HR Management System API

## ITEC116 Final Project

**Developer:** Aldrich Mico Felizardo

## Project Description

The HR Management System API is a backend application designed to help Human Resources staff manage recruitment activities. It allows authorized users to manage applicants, job positions, job applications, HR staff, and departments through RESTful API endpoints.

The system uses JWT authentication, password hashing, role-based access control, and input validation to help protect information and restrict administrative operations.

This project focuses on backend development and does not include a frontend interface.

## Technologies Used

- NestJS and TypeScript
- Node.js
- MySQL
- TypeORM
- JSON Web Tokens (JWT)
- bcrypt
- class-validator and class-transformer
- Git and GitHub
- Postman for API testing

## Main Features

1. User registration and login
2. JWT-based authentication
3. Admin-protected API endpoints
4. Applicant management
5. Job position management
6. Job application management
7. Department management
8. HR staff management
9. MySQL database integration
10. Input validation and error handling

## API Endpoints


## API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Authentication
| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a user |
| POST | `/auth/login` | Log in and receive a JWT token |

### Applicants
| Method | Endpoint | Description |
|---|---|---|
| GET | `/applicants` | Get all applicants |
| GET | `/applicants/:id` | Get an applicant by ID |
| POST | `/applicants` | Create an applicant |
| PATCH | `/applicants/:id` | Partially update an applicant |
| PUT | `/applicants/:id` | Update an applicant using a full DTO |
| DELETE | `/applicants/:id` | Delete an applicant |

### Job Positions
| Method | Endpoint | Description |
|---|---|---|
| GET | `/job-positions` | Get all job positions |
| GET | `/job-positions/:id` | Get a job position by ID |
| POST | `/job-positions` | Create a job position |
| PATCH | `/job-positions/:id` | Update a job position |
| DELETE | `/job-positions/:id` | Delete a job position |

### Job Applications
| Method | Endpoint | Description |
|---|---|---|
| GET | `/job-applications` | Get all job applications |
| GET | `/job-applications/:id` | Get an application by ID |
| POST | `/job-applications` | Submit a job application |
| PATCH | `/job-applications/:id` | Update application status |
| DELETE | `/job-applications/:id` | Delete a job application |

### Departments
| Method | Endpoint | Description |
|---|---|---|
| GET | `/departments` | Get all departments |
| GET | `/departments/:id` | Get a department by ID |
| POST | `/departments` | Create a department |
| PATCH | `/departments/:id` | Update a department |
| DELETE | `/departments/:id` | Delete a department |

### HR Staff
| Method | Endpoint | Description |
|---|---|---|
| GET | `/hr-staff` | Get all HR staff |
| GET | `/hr-staff/:id` | Get an HR staff member by ID |
| POST | `/hr-staff` | Create an HR staff member |
| PATCH | `/hr-staff/:id` | Update an HR staff member |
| DELETE | `/hr-staff/:id` | Delete an HR staff member |

### Authentication and Authorization
All CRUD endpoints require a valid JWT bearer token.

- Applicants, Job Applications, and HR Staff endpoints require the `admin` role.
- Job Positions and Departments allow authenticated users to read records, but only administrators can create, update, or delete them.


### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a user |
| POST | `/auth/login` | Log in and receive a JWT |

### Applicants

| Method | Endpoint | Description |
|---|---|---|
| GET | `/applicants` | Retrieve all applicants |
| GET | `/applicants/:id` | Retrieve an applicant |
| POST | `/applicants` | Create an applicant |
| PATCH | `/applicants/:id` | Update an applicant |
| DELETE | `/applicants/:id` | Delete an applicant |

### Job Positions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/jobs` | Retrieve all job positions |
| GET | `/jobs/:id` | Retrieve a job position |
| POST | `/jobs` | Create a job position |
| PATCH | `/jobs/:id` | Update a job position |
| DELETE | `/jobs/:id` | Delete a job position |

### Job Applications

| Method | Endpoint | Description |
|---|---|---|
| GET | `/job-applications` | Retrieve all applications |
| GET | `/job-applications/:id` | Retrieve an application |
| POST | `/job-applications` | Submit an application record |
| PATCH | `/job-applications/:id` | Update an application |
| DELETE | `/job-applications/:id` | Delete an application |

### Departments

| Method | Endpoint | Description |
|---|---|---|
| GET | `/departments` | Retrieve all departments |
| GET | `/departments/:id` | Retrieve a department |
| POST | `/departments` | Create a department |
| PATCH | `/departments/:id` | Update a department |
| DELETE | `/departments/:id` | Delete a department |

### HR Staff

| Method | Endpoint | Description |
|---|---|---|
| GET | `/hr-staff` | Retrieve all HR staff |
| GET | `/hr-staff/:id` | Retrieve an HR staff member |
| POST | `/hr-staff` | Create an HR staff record |
| PATCH | `/hr-staff/:id` | Update an HR staff record |
| DELETE | `/hr-staff/:id` | Delete an HR staff record |

**Total:** 27 API endpoints, excluding the default root route.

**Note:** The current endpoint paths are listed above. The planned `/api/v1` prefix, `/job-positions` naming, and applicant PUT endpoint still need to be aligned with the original API design.

## Database

Database name: `itec116_hr_management`

The system uses six MySQL tables:

1. `users`
2. `applicants`
3. `jobs`
4. `job_applications`
5. `departments`
6. `hr_staff`

The `job_applications` table references applicants and jobs, while `hr_staff` references departments.

The SQL database export is provided in `database.sql`.

## Installation and Setup

### 1. Requirements

Install the following:

- Node.js and npm
- MySQL Server
- MySQL Workbench (optional)
- Visual Studio Code (optional)

### 2. Install dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

On Windows PowerShell, use `npm.cmd install` if script execution is restricted.

### 3. Import the database

Create the MySQL database named `itec116_hr_management` and import the included `database.sql` file using MySQL Workbench or the MySQL command-line tools.

### 4. Configure environment variables

Create a `.env` file in the project root and enter the database and JWT settings required by `src/app.module.ts` and the authentication module.

Use the same environment variable names expected by the application. Do not upload actual database passwords or JWT secrets to GitHub.

### 5. Run the application

```bash
npm run start:dev
```

For PowerShell:

```powershell
npm.cmd run start:dev
```

The API runs locally at:

`http://localhost:3000`

## Authentication and Authorization

Users authenticate through `/auth/login` to receive a JWT access token.

Protected endpoints require the following HTTP header:

```text
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Administrative operations are restricted using JWT authentication and role-based authorization guards.

Passwords are hashed using bcrypt instead of being stored as plain text.

## API Testing

The API can be tested using Postman or PowerShell.

Recommended tests include:

- Successful and unsuccessful login
- Requests without authentication
- Requests without admin permission
- Create, read, update, and delete operations
- Invalid request bodies
- Requests for records that do not exist
- Database relationship checks

## Project Structure

```text
src/
  applicants/
  auth/
  departments/
  hr-staff/
  job-applications/
  jobs/
  app.module.ts
  main.ts

database.sql
README.md
```

## Project Status

The backend CRUD modules, authentication, and database integration have been implemented. Final endpoint alignment, verification, Postman collection, and submission documentation are being completed.

## Academic Purpose

This project was developed as an individual final project for ITEC116 to demonstrate REST API development, authentication, database integration, and backend application design.
