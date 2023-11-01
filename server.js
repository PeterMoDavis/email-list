const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri =
  'mongodb+srv://pmodavis:BrianRapshby@emaillist.5qvwujl.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log('Server started on port 8000 hello everyone!');
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

const newUser = new User({
  firstName: 'Peter',
  lastName: 'MoDavis',
  email: 'pmodavis@gmail.com',
});

newUser
  .save()
  .then((user) => {
    console.log(`User saved: ${user}`);
  })
  .catch((err) => {
    console.log(err);
  });
