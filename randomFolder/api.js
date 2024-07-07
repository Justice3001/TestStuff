// api.js

const axios = require('axios');

// Sample data with "id"
const people = [
  { id: 1, name: 'Alice', number: 1234, height: 165, book: 'Alice in Wonderland' },
  { id: 2, name: 'Bob', number: 5678, height: 175, book: 'The Great Gatsby' },
  { id: 3, name: 'Charlie', number: 9101, height: 180, book: '1984' },
  { id: 4, name: 'Diana', number: 1213, height: 160, book: 'Pride and Prejudice' }
];

// Function to fetch all people
async function fetchAllPeople() {
  return people;
}

// Function to fetch a specific person by id
async function fetchPersonById(id) {
  const person = people.find(p => p.id === id);
  if (person) {
    return person;
  } else {
    throw new Error('Person not found');
  }
}

module.exports = {
  fetchAllPeople,
  fetchPersonById
};
