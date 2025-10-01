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

- **PATCH `/tasks/:id`** → Toggle a task’s completion status  
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

```bash
# install dependencies
npm install

# start dev server
npm run dev
```

Server runs on http://localhost:3000
