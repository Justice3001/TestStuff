//asycn function

async function starWars(id) {
  //api endpoint
  const url = `https://swapi.dev/api/peopl/${id}`;

  //try and catch block
  try {
    //make GET request
    const response = await fetch(url);

    //throw any error and status and status text
    if (!response.ok) {
      throw new Error(` ${response.status}- ${response.statusText}`);
    }

    //parse the json data
    const data = await response.json();

    //handle the data
    const starWarsInfo = {
      Name: data.name,
      Gender: data.gender,
      BirthYear: data.birth_year,
      Height: data.height,
    };

    //return the array starWarsInfo
    return starWarsInfo;
  } catch (error) {
    console.log("fetch error:",error);
    return 'Oops! Something went wrong. No joke for you!';
  }
}

//call the function, use then promise.
starWars(4).then((info) => {
  console.log("Star Wars Info:", info);
});
