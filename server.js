const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const pets = [
  { name: "Hans", species: "Dog" },
  { name: "Smokey", species: "Cat" },
];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/pets", (req, res) => {
  res.sendFile(path.join(__dirname, "pets.html"));
});
app.get("/pets/:name", (req, res) => {
  const petName = req.params.name;
  const pet = pets.find((p) => p.name.toLowerCase() === petName.toLowerCase());
  if (pet) {
    res.status(200).json(pet);
  } else {
    res.status(404).send("Pet not found");
  }
});
app.get("/api/pets", (req, res) => {
  res.json(pets);
});
app.get("/api/pets/:name", (req, res) => {
  const petName = req.params.name;
  const pet = pets.find((p) => p.name.toLowerCase() === petName.toLowerCase());
  if (pet) {
    res.status(200).json(pet);
  } else {
    res.status(404).send("Pet not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
