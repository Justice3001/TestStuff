//async function
async function People(id) {
  //api endpioint
  const url = `http://localhost:3000/people/${id}`;

  //try catch block
  try {
    //GET request
    const response = await fetch(url);

    //throw any errors
    if (!response.ok) {
      throw new Error("Error:", response.status);
    }

    //parse the json data
    const data = await response.json();

    //handle data
    const person = {
      id: data.id,
      name: data.name,
      number: data.number,
      height: data.height,
      book: data.book,
    };

    return person;
  } catch (error) {
    console.log("fetch error:", error);
  }
}

//call the function
People(1).then((info) => {
  console.log("person info:", info);
});
