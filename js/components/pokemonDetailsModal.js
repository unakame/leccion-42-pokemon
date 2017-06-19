

'use strict';

const pokeModal = () => {
  var modalBox = $('<div id="myModal" class="modal fade" role="dialog"></div>');
  var modalBox1 = $('<div class="modal-dialog"></div>');
  var modalContent = $('<div class="modal-content"></div>');
  var buttonClose = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
  var pokeName = $('<h4 class="modal-title">Modal Header</h4>');
  var divBody = $('<div class="modal-body"></div>');
  var text = $('<p>Some text in the modal.</p>');


    modalBox.append(modalBox1);
    modalBox1.append(modalContent);
    modalContent.append(buttonClose);

    return modalBox;
}


//pokemon.pokemon_species.name
