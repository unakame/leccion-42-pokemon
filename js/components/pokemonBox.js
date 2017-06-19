'use strict';



  $(function() {
  	$.getJSON("http://pokeapi.co/api/v2/pokedex/1/", function (e) {
  			var pokemons = e.pokemon_entries;
  			item(pokemons);
  		});
  });

  function item(pokemons) {
  	var i = 0;
  	pokemons.forEach(function (pokemon) {
   	i++;
  	var pokemonMiniBox       = $('<div class="pokemonMiniBox col-md-2 col-xs-2">');
  	var pokemonBoxIcon       = $('<div class="icon-box">');
    var pokemonAnchor        = $('<a href="#modalBox">');
    var pokemonPokeballIcon  = $('<img src="icon/pokeball_gray.png" class="icon">');
    var pokemonHeartIcon     = $('<img src="icon/valentines-heart.png" class="icon">');
    var pokemonDataIcon      = $('<img src="icon/data.png" class="icon">');
  	var pokemonName          = $('<p>'+pokemon.pokemon_species.name+'</p>');
  	var pokemonImg           = $('<img src="http://serebii.net/art/th/'+ i+'.png">');


    pokemonMiniBox.append(pokemonImg);
    pokemonMiniBox.append(pokemonBoxIcon);
    pokemonBoxIcon.append(pokemonAnchor);
    pokemonAnchor.append(pokemonPokeballIcon);
    pokemonBoxIcon.append(pokemonHeartIcon);
    pokemonBoxIcon.append(pokemonDataIcon);
    pokemonMiniBox.append(pokemonName);


  	$('.pokemonBox').append(pokemonMiniBox);
  	});
  }
