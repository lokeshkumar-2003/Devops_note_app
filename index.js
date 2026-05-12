const express = require("express");
const Note = require("./models/Note");

const app = express();

app.use(express.json());

app.post("/notes", async (req, res) => {
  const note = await Note.create(req.body);

  res.json(note);
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();

  res.json(notes);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});