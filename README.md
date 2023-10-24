# REST API using Node and Express
This repository contains a Node.js and Express-based REST API for a web application. The API provides endpoints to perform various actions, including creating, reading, updating, and deleting users. The API is thoroughly tested using Postman, ensuring the reliability and functionality of each endpoint.

## Getting Started

Follow these instructions to set up and test the REST API.

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone this repository to your local machine.

   ```
   git clone https://github.com/Josy-coder/rest-api.git
   ```

2. Navigate to the project directory.
```
cd your-repo
```
3. Install the required dependencies.
```
npm install
```
4. Start the server.
```
npm start
```
Server start at localhost:5000

## Testing the API
You can use Postman for API testing. Follow these steps:

1. Install Postman if you haven't already.
2. Ensure that the API responds as expected and returns the correct status codes and data.

### API Endpoints
*GET* http://localhost:5000/users: Retrieve a list of users.

*GET* http://localhost:5000/users/:id: Retrieve a user by ID.

*POST* http://localhost:5000/users: Create a new user.

*PATCH* http://localhost:5000/users/:id: Update an existing user.

*DELETE* http://localhost:5000/users/:id: Delete a user.

## Built With
- Node.js
- Express
## Author
Josy-coder
