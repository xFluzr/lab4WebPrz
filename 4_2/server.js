const express = require('express');
const cors = require('cors');
const { categories, jokes } = require('./data');
const app = express();
const port = 3000;

// Middleware
app.use(cors());  // <-- obsługa CORS
app.use(express.json());

// Endpoints
app.get('/jokebook/categories', (req, res) => {
  res.json(categories);
});

app.get('/jokebook/joke/:category', (req, res) => {
  const category = req.params.category;

  if (!jokes[category]) {
    return res.json({ error: `no jokes for category ${category}` });
  }

  const randomIndex = Math.floor(Math.random() * jokes[category].length);
  res.json(jokes[category][randomIndex]);
});

app.get('/jokebook/all', (req, res) => {
  res.json(jokes);
});

// Start server
app.listen(port, () => {
  console.log(`JokeBook API running on http://localhost:${port}`);
});
