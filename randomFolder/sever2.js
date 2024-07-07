//import express module
const express = require("express");
//create express application
const app = express();
//set port for sever
const port = 3000;

//sample data
// Sample data with "id"
const people = [
  {
    id: 1,
    name: "Alice",
    number: 1234,
    height: 165,
    book: "Alice in Wonderland",
  },
  { id: 2, name: "Bob", number: 5678, height: 175, book: "The Great Gatsby" },
  { id: 3, name: "Charlie", number: 9101, height: 180, book: "1984" },
  {
    id: 4,
    name: "Diana",
    number: 1213,
    height: 160,
    book: "Pride and Prejudice",
  },
];

//endpoint for all people
app.get("/people/:id", (res, req) => {
  //parse url info to integer
  const id = parseInt(req.params.id, 10);

  //find info on person that matches id
  const person = people.find((p) => p.id === id);

  //check if info exist
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({ message: "person not found" });
  }
});

//start the sever
app.listen(port, () => {
    console.log(`sever is runnin on http//localhost:${port}`);
});
