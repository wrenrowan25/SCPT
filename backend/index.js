// =====================
// Import Required Packages
// =====================
const express = require('express'); // Import Express framework for building HTTP server
const mongoose = require('mongoose'); // Import Mongoose for connecting and interacting with MongoDB
const cors = require('cors'); // Import CORS middleware to handle cross-origin requests
require('dotenv').config(); // Load environment variables from .env file

// =====================
// Initialize Express App
// =====================
const app = express(); // Create an instance of an Express application

// =====================
// Apply Middleware
// =====================
app.use(cors()); // Allow cross-origin requests from different domains (important for frontend-backend communication)
app.use(express.json()); // Parse incoming JSON requests automatically

// =====================
// Set Server Port
// =====================
const PORT = process.env.PORT || 5000; // Use port from environment variable or default to 5000

// =====================
// Connect to MongoDB
// =====================
mongoose.connect(process.env.MONGO_URI, { // Use connection string from .env file to connect to MongoDB
  useNewUrlParser: true, // Use new URL string parser (avoids deprecation warnings)
  useUnifiedTopology: true, // Use new unified topology engine (avoids deprecation warnings)
})
  .then(() => console.log("Connected to MongoDB")) // Log success message on successful connection
  .catch(err => console.error("MongoDB connection error:", err)); // Log error if connection fails

// =====================
// Define Basic Test Route
// =====================
app.get('/', (req, res) => res.send('API is running')); // Create a GET route at root URL to test if backend is working

// =====================
// Start the Server
// =====================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log confirmation that server is listening
});
