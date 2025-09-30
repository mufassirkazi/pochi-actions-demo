import express from "express";

const app = express();
app.use(express.json());

let users: { id: number; name: string }[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Bad: endpoint mixes concerns, no validation, no error handling
app.post("/addUser", (req, res) => {
  const { id, name } = req.body;
  users.push({ id, name }); // No duplicate check!
  res.send("ok");
});

// Bad: synchronous filter instead of proper DB, missing 404 handling
app.get("/getUser/:id", (req, res) => {
  const user = users.filter((u) => u.id == parseInt(req.params.id))[0];
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
