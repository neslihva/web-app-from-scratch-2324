async function postJSON(data) {
    try {
      const response = await fetch("./me.json")
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  const data = { username: "neslihva" };
  postJSON(data);

  const container = document.getElementById("pokemon");

  document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;
  
    // Choose a random pokemon number from 1-893
    const pokemonNumber = getRandomInt(1, 893);
  
    /*
    Here we send a request to the Pokenmon API
    Then process the response into JSON
    Then pass the data to our renderPokemon function.
    */
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
      .then((response) => response.json())
      .then((data) => renderPokemon(data))
      .catch(() => renderError());
  });
  
  function renderPokemon(data) {
    container.innerHTML = "";
    var img = document.createElement("img");
    img.src = data.sprites.front_default;
    img.alt = data.name;
  
    var text = document.createElement("p");
    text.className = "pokemonName";
    text.innerHTML = data.name;
  
    container.appendChild(text);
    container.appendChild(img);
  }
  
  function renderError() {
    container.innerHTML = "Whoops, something went wrong. Please try again!";
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const setStats = (stats = []) => {
    const statsContainer = document.getElementById('stats')
    statsContainer.innerHTML = '<h4>Stats</h4>'
  }