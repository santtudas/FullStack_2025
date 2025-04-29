const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;

// Import routes
const henkiloRoutes = require('./routes/henkiloRoutes');

// Middleware
app.use(bodyParser.json());

// MongoDB 
mongoose.connect(uri)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', henkiloRoutes);

// Handle unknown endpoints
app.use((req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Malformed ID' });
  } else if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  res.status(500).json({ error: 'Internal server error' });
});


// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));