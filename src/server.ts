import express, { Request, Response, NextFunction } from "express";
import crypto from "crypto";

const app = express();
app.use(express.json());

// Request ID middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  (req as any).id = crypto.randomUUID();
  next();
});

let users: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Get all users
app.get("/api/users", (req, res, next) => {
  try {
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Get user by ID with proper error handling
app.get("/api/users/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Add user with validation and duplicate checking
app.post("/api/users", (req, res, next) => {
  try {
    const { id, name } = req.body;
    
    // Validate input
    if (!id || !name) {
      return res.status(400).json({ error: "ID and name are required" });
    }
    
    if (typeof id !== "number" || typeof name !== "string") {
      return res.status(400).json({ error: "ID must be a number and name must be a string" });
    }
    
    // Check for duplicates
    if (users.some((user) => user.id === id)) {
      return res.status(409).json({ error: "User with this ID already exists" });
    }
    
    users.push({ id, name });
    res.status(201).json({ id, name });
  } catch (error) {
    next(error);
  }
});

// Update user
app.put("/api/users/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Name is required and must be a string" });
    }
    
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    
    users[userIndex] = { id, name };
    res.json({ id, name });
  } catch (error) {
    next(error);
  }
});

// Delete user
app.delete("/api/users/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    
    users.splice(userIndex, 1);
    res.status(204).send();
  } catch (error) {
    next(error);
  }

  // TODO: improve validation
});

// Centralized error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const requestId = (req as any).id || "N/A";
  console.error(`[${requestId}] Error: ${err.message}`);
  if (err.stack) {
    console.error(`[${requestId}] Stack: ${err.stack}`);
  }
  
  res.status(500).json({ 
    error: "Internal server error",
    requestId: requestId
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
