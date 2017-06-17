'use strict'

const PokemonBox = () => {
  const pokemonBox = $('<div class="pokemonBox row"></div>');
  const pokemonMiniBox = $('<div class="pokemonMiniBox col-md-2"></div>');

  pokemonBox.append(pokemonMiniBox);
  return pokemonBox;
}
