const express = require('express');
const cors = require('cors');

const { armorDataset } = require('./data');

const app = express();
const PORT = 3000;

// Global Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get('/api/status', (req, res) => {
  res.json({ 
    status: "online", 
    game: "Monster Hunter Wilds Armor API",
    version: "1.0.0" 
  });
});

app.get('/api/armor', (req, res) => {
  res.json(armorDataset);
});

// Server Initialization
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});