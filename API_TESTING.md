# HR Management System - API Testing Guide

## 1. Overview

The HR Management System API was tested using Postman to
verify its functionality, authentication, input validation,
database operations, and protected endpoints.

## 2. Testing Tools

- Postman
- NestJS
- MySQL
- TypeORM
- Visual Studio Code

## 3. API Base URL

http://localhost:3000/api/v1

## 4. Postman Setup

1. Start the MySQL database server.
2. Start the NestJS application using npm run start:dev.
3. Open Postman.
4. Import the postman_collection.json file.
5. Open the collection variables.
6. Configure the baseUrl, adminEmail, and adminPassword.
7. Execute the Admin Login request.
8. Use the generated JWT token for protected endpoints.

## 5. Authentication Testing

The system uses JWT authentication to protect API endpoints.
Users must provide a valid token to access protected resources.
Passwords are hashed using bcrypt.

| Test Case | Status Code | Result |
|---|---|---|
| Successful admin login | 201 Created | Passed |
| Access with valid token | 200 OK | Passed |
| Access without token | 401 Unauthorized | Passed |

## 6. CRUD Modules

The following modules support CRUD operations:

- Applicants
- Job Positions
- Job Applications
- Departments
- HR Staff

Each module supports creating, retrieving, updating, and
deleting records through REST API endpoints.

## 7. Expected CRUD Responses

| Operation | HTTP Method | Expected Status |
|---|---|---|
| Retrieve records | GET | 200 OK |
| Retrieve record by ID | GET | 200 OK |
| Create record | POST | 201 Created |
| Update record | PATCH | 200 OK |
| Full applicant update | PUT | 200 OK |
| Delete record | DELETE | 200 OK |

## 8. Input Validation Testing

The system uses Data Transfer Objects (DTOs) to validate
incoming requests before processing and storing data.

The following invalid applicant data was submitted:

```json
{
  "firstName": "",
  "lastName": "",
  "email": "invalid-email",
  "positionApplied": ""
}
```

Expected response: 400 Bad Request

Actual response: 400 Bad Request

Result: Passed

## 9. Database Tables

The MySQL database contains the following tables:

- users
- applicants
- jobs
- job_applications
- departments
- hr_staff

The database uses relationships to associate job applications
with applicants and job positions, and HR staff with departments.

## 10. Security Measures

- JWT authentication
- Password hashing using bcrypt
- Role-based access control
- Protected API endpoints
- DTO input validation
- Environment variables for sensitive configuration

## 11. Conclusion

The API testing confirmed that the system can authenticate
users, retrieve and create records, reject unauthorized
requests, and validate invalid input. The Postman collection
is included in the project repository for demonstration
and further testing.