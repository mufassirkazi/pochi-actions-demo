import express from "express";

const app = express();
app.use(express.json());

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
let idCounter = 1;

// Add task with validation + proper response
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask: Task = { id: idCounter++, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get tasks (returns JSON)
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Delete task with validation
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(index, 1);
  res.json({ deleted: deleted[0] });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
