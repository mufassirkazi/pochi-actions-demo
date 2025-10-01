# Task Management API (Express + React)

This project is a simple full-stack demo with an **Express.js backend** and a **React frontend**.  
It allows you to manage tasks with **create, read, update, and delete (CRUD)** operations.

---

## Backend: Express API

### Endpoints

- **POST `/tasks`** → Create a new task  
  - Request body: `{ "title": "string" }`  
  - Response: `201 Created` with new task object  

- **GET `/tasks`** → Get all tasks  
  - Response: Array of tasks  

- **PATCH `/tasks/:id`** → Toggle a task's completion status  
  - Response: Updated task  

- **DELETE `/tasks/:id`** → Delete a task  
  - Response: `{ deleted: task }`

---

## Frontend: React

The React frontend provides:

- Task list with **loading state**
- Add new task
- Toggle task completion (strike-through style)
- Delete task

See `src/components/TaskList.tsx`.

---

## Example Usage

### Add a Task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Write tutorial"}'
```

## Response:
```json
{
  "id": 1,
  "title": "Write tutorial",
  "completed": false
}
```

## Get All Tasks
```bash
curl http://localhost:3000/tasks
```


## Response:

```json
[
  {
    "id": 1,
    "title": "Write tutorial",
    "completed": false
  }
]

```

## Running Locally

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Install dependencies
npm install
```

### Development Mode

```bash
# Start both backend and frontend in development mode
npm run dev

# The backend API will be available at http://localhost:3000
# The frontend React app will be available at http://localhost:3001
```

### Production Build

```bash
# Build the application
npm run build

# Start the application in production mode
npm start

# The application will be available at http://localhost:3000
```

## Project Structure

```
.
├── src/
│   ├── server.ts          # Express.js backend
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Main React component
│   ├── components/
│   │   └── TaskList.tsx   # Task management component
│   └── ...
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration for frontend
```

## Features

- Full CRUD operations for tasks
- RESTful API design
- TypeScript for type safety
- React frontend with hooks
- Responsive design
- Error handling
- Production-ready build process

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request