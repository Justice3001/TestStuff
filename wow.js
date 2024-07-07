//funtion to fetch pokemon by name or id
async function fetchPokemonDetails(id) {

    //api 
    const url=`https://pokeapi.co/api/v2/pokemon/${id}/`;

    try {

        const response=await fetch(url);

        //check for errors
        if(!response.ok){
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        //parse the data received
        const data= await response.json();

        //handle the data
        const pokemonDetails = {
            name:data.name,
            type:data.types[0].type.name,
            ability: data.abilities[0].ability.name 
        };

        //return data handled
        return pokemonDetails;

    } catch(error) {
        //log any errors during the fetch
        console.log('fetch error:',error);
    }

}

//call the pokemon function by name or id of pokemon
fetchPokemonDetails(4).then(info => {
    console.log('pokmeon info;', info );
});