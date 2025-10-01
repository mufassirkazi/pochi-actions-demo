# pochi-actions-demo
Pochi GitHub Actions integration

## API Endpoints

### Get all users
GET /api/users

### Get user by ID
GET /api/users/:id

### Add a new user
POST /api/users
Body: { "id": number, "name": string }

### Update a user
PUT /api/users/:id
Body: { "name": string }

### Delete a user
DELETE /api/users/:id

## Features
- Express.js backend with REST API
- React frontend with TypeScript
- Proper error handling and validation
- Full CRUD operations for users