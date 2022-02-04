/*jshint esversion: 8 */

const container = document.getElementById('container');
const pkmn_nbr = 251;

const fetchPokemons = async () => {
    for (let i = 1; i <= pkmn_nbr; i++){
        await getPokemon(i);  
    }
};

const getPokemon = async id => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
};

function createPokemonCard (pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon_card');
    const pokemonMainType = pokemon.types[0].type.name;
    const pokeInnerHTML = '<div class="card ' + pokemonMainType + '"><img class="card-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + pokemon.id + '.svg" alt = ""><h2 class="card-name">' + pokemon.name + '</h2><span class="card-id">#' + pokemon.id + '</span></div >';

    

    pokemonCard.innerHTML = pokeInnerHTML;
    container.appendChild(pokemonCard);

}
fetchPokemons();



// CARD PAGE

document.getElementsByTagName('title').innerHTML = pokemon.name;
