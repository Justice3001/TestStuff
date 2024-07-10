//use this endpoint https://icanhazdadjoke.com/
//calling api's

const GetApi = async () => {
  //api
  const url = "https://icanhazdadjoke.com/";

  //try and catch block

  try {
    //make GET request
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    //throw any errors status and text
    if (!response.ok) {
      throw new Error(`error: ${response.status}- ${response.statusText}`);
    }

    //parse the json data
    const data = await response.json();

    //handle the data
    const ApiInfo = {
      Joke: data.joke,
    };

    return ApiInfo;
  } catch (error) {
    console.log("error", error);
  }
};

//call this getapi function use then promise
GetApi().then((info) => {
  console.log("this joke is:", info);
});
