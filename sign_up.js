// Import required modules
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('C:\\Users\\rajsa\\OneDrive\\Desktop\\Stargazer\\Webpage\\Model\\user.js'); // Import your User model

// Create an Express app
const app = express();

// Middleware to parse request body
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define the /signup route
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    res.redirect('/login'); // Redirect to login page after signup
  } catch (err) {
    console.error('Error signing up user:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Hello!');
  });
  
