import express from "express";
import path from "path";

const app = express();
app.use(express.json());

// Serve static files from the React app build directory in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client")));
  
  // Serve the React app for any non-API routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
  });
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
let idCounter = 1;

// Create a new task
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask: Task = { id: idCounter++, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Toggle task completion
app.patch("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = !task.completed;
  res.json(task);
});

// Delete task
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(index, 1);
  res.json({ deleted: deleted[0] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});