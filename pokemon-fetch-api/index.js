// fetch - function used for making HTTP requests to fetch resources.
// json style data, images, files
// simplifies asynchronous data fetching in JavaScript and used for interacting with API's to retrieve and send data asynchronously over the internet
// fetch(url, {method: "PUT", "POST", "DELETE"})

//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//    .then(response =>{

//        if(!response.ok){
//            throw new Error("Could not fetch resources");
//        }
//        return response.json();
//    })
//    .then(data => console.log(data))
//    .catch(error => console.log(error));

async function fetchData() {
	try {
		const pokemonName = document
			.getElementById("pokemonName")
			.value.toLowerCase();

		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
		);

		if (!response.ok) {
			throw new Error("Could not fetch resources");
		}

		const data = await response.json();
		const pokemonSprite = data.sprites.front_default;
		const imgElement = document.getElementById("pokemonSprite");

		imgElement.src = pokemonSprite;
		imgElement.style.display = "block";
	} catch (error) {
		console.error(error);
	}
}
