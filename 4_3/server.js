const express = require("express");
const cors = require("cors");
const path = require("path");
const { categories, jokes } = require("./data");

const app = express();
const port = 3000;

// CORS
app.use(cors());

// serwowanie frontendu (folder public)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

// API
app.get("/jokebook/categories", (req, res) => {
  res.json(categories);
});

app.get("/jokebook/joke/:category", (req, res) => {
  const category = req.params.category;

  if (!jokes[category]) {
    return res.json({ error: `no jokes for category ${category}` });
  }

  const randomIndex = Math.floor(Math.random() * jokes[category].length);
  res.json(jokes[category][randomIndex]);
});

app.get("/jokebook/all", (req, res) => {
  res.json(jokes);
});

// uruchomienie serwera
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
