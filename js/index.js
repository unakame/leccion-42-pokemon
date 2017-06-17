'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search());
  wrapper.append(PokemonBox());

  root.append(wrapper);
}

//funcion anónima esencial para que se ejecute en jQuery

const state = {
  pokemon: null
  //selectedPokemon:
};

$(_ => {

  getJSON('http://pokeapi.co/api/v2/pokedex/1/', (err, json) => {

    if (err) { return alert(err.message);}

    state.pokemon = json.pokemon_entries;

    const root = $('#root');
    render(root);
  });

});
