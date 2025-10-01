import express from "express";

const app = express();
app.use(express.json());

let tasks: any[] = [];

// Add task (no validation, wrong status code)
app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.send("Task added");
});

// Get tasks (no error handling, returns raw array)
app.get("/tasks", (req, res) => {
  res.send(tasks);
});

// Delete task (no validation, no proper status code)
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter((t: any, i: number) => i !== id);
  res.send("Deleted");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
