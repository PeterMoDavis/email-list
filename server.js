// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const uri =
  'mongodb+srv://pmodavis:BrianRapshby@emaillist.5qvwujl.mongodb.net/users?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Hello Peter, You are now connected to to MongoDB 🚂');
  } catch (error) {
    console.error(error);
  }
}

connect();

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

app.post('/saveUser', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = new User({ firstName, lastName, email });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
