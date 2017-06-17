'use strict'

const PokemonBox = () => {
  const pokemonBox      = $('<div class="pokemonBox row"></div>');
  const pokemonMiniBox  = $('<div class="pokemonMiniBox col-md-2"></div>');
  const pokemonImg      = $('<img src="http://serebii.net/art/th/39.png">');
  const pokemonIcons    = $('<div class="icon-box"><a href="#"><img src="icon/pokeball_gray.png" class="icon"></a><a href="#"><img src="icon/valentines-heart.png" class="heart icon"></a><a><img src="icon/data.png" class="icon"></a></div>')
  const pokemonName     = $('<p>Nombre</p>');
  const pokemonModal    = $('<button class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button><div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg"><div class="modal-content">...</div></div></div>')

  pokemonBox.append(pokemonMiniBox);
  pokemonMiniBox.append(pokemonImg);
  pokemonMiniBox.append(pokemonIcons);
  pokemonMiniBox.append(pokemonName);




  return pokemonBox;
}

/*$('img').click( function() {
    $(this).css('color', 'red')
  } );*/
