document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const colors_types = {
    // colores para los tipos de pokemon
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };
  const BASE_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"; // URL base de la API
  const searchPokemonInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const pokemonContainer = document.querySelector("#pokemon-container");

  // Funciones

  const clearPokemonContainer = () => {
    // variables con identificadores de los elementos
    let pokemonImage = document.querySelector("#pokemon-image");
    let pokemonName = document.querySelector("#pokemon-name");
    let pokemonNumber = document.querySelector("#pokemon-id");
    let pokemonTypes = document.querySelector("#types");
    let weight = document.querySelector("#weight");
    let height = document.querySelector("#height");
    let hp = document.querySelector("#hp");
    let attack = document.querySelector("#attack");
    let defense = document.querySelector("#defense");
    let spAtack = document.querySelector("#special-attack");
    let spDefense = document.querySelector("#special-defense");
    let speed = document.querySelector("#speed");

    // limpiar los elementos
    pokemonImage.src = "";
    pokemonName.textContent = "";
    pokemonNumber.textContent = "";
    pokemonTypes.textContent = "";
    weight.textContent = "";
    height.textContent = "";
    hp.textContent = "";
    attack.textContent = "";
    defense.textContent = "";
    spAtack.textContent = "";
    spDefense.textContent = "";
    speed.textContent = "";

    // ocultar la imagen
    pokemonImage.classList.add("hidden");
  };

  const check_valid_pokemon_input = (pokemon) => {
    // verificar si el pokemon es valido
    let value = searchPokemonInput.value;
    if (value === "") {
      alert("Ingrese un nombre de pokemon");
      return false;
    }
    return true;
  };

  const getPokemon = async (pokemon) => {
    // obtener los datos del pokemon
    try {
      const response = await fetch(`${BASE_URL}/${pokemon}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
    return null;
  };

  const renderPokemon = (pokemonData) => {
    // función para pintar los datos del pokemon
    let pokemonImage = document.querySelector("#pokemon-image");
    let pokemonName = document.querySelector("#pokemon-name");
    let pokemonNumber = document.querySelector("#pokemon-id");
    let pokemonTypes = document.querySelector("#types");
    let weight = document.querySelector("#weight");
    let height = document.querySelector("#height");
    let hp = document.querySelector("#hp");
    let attack = document.querySelector("#attack");
    let defense = document.querySelector("#defense");
    let spAtack = document.querySelector("#special-attack");
    let spDefense = document.querySelector("#special-defense");
    let speed = document.querySelector("#speed");

    // mostrar la imagen
    pokemonImage.classList.remove("hidden");
    pokemonImage.src = pokemonData?.sprites?.front_default;
    pokemonName.textContent = pokemonData?.name;
    pokemonNumber.textContent = `#${pokemonData?.id}`;
    weight.textContent = pokemonData?.weight;
    height.textContent = pokemonData?.height;
    hp.textContent = pokemonData?.stats[0]?.base_stat;
    attack.textContent = pokemonData?.stats[1]?.base_stat;
    defense.textContent = pokemonData?.stats[2]?.base_stat;
    spAtack.textContent = pokemonData?.stats[3]?.base_stat;
    spDefense.textContent = pokemonData?.stats[4]?.base_stat;
    speed.textContent = pokemonData?.stats[5]?.base_stat;

    // pintar los tipos de pokemon

    pokemonTypes.innerHTML = "";
    pokemonData.types.forEach((type) => {
      const typeElement = document.createElement("span");
      typeElement.classList.add(
        "text-white",
        "px-2",
        "py-1",
        "rounded",
        "mr-2"
      );
      typeElement.textContent = type.type.name;
      typeElement.style.backgroundColor = colors_types[type.type.name];
      pokemonTypes.appendChild(typeElement);
    });
  };
  // Listener

  searchButton.addEventListener("click", async () => {
    // buscar el pokemon
    clearPokemonContainer();
    if (!check_valid_pokemon_input(searchPokemonInput.value)) {
      return;
    }

    const pokemonData = await getPokemon(searchPokemonInput.value);
    if (pokemonData === null) {
      alert("Pokemon no encontrado");
      return;
    }
    console.log(pokemonData);
    renderPokemon(pokemonData);
  });
});
