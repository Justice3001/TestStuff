const express = require('express');
const app = express();
const port = 3000;

// Sample data with "id"
const people = [
  { id: 1, name: 'Alice', number: 1234, height: 165, book: 'Alice in Wonderland' },
  { id: 2, name: 'Bob', number: 5678, height: 175, book: 'The Great Gatsby' },
  { id: 3, name: 'Charlie', number: 9101, height: 180, book: '1984' },
  { id: 4, name: 'Diana', number: 1213, height: 160, book: 'Pride and Prejudice' }
];

// Endpoint to fetch all people
app.get('/people', (req, res) => {
  res.json(people);
});

// Endpoint to fetch a specific person by id
app.get('/people/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const person = people.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
