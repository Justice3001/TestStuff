//async function

async function DadJokes() {
  //api endpoint
  const url = "https://icanhazdadjoke.com/";

  //try and catch block
  try {
    //GET request fetch
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    //throw any errors and status, status text
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    //parse the json data
    const data = await response.json();

    //handle the data
    const Joke = {
      Joke: data.joke,
    };

    return Joke;
  } catch (error) {
    console.log("Error", error);
  }
}

//call the function use then promise
DadJokes(1).then((info) => {
  console.log("joke:", info);
});
