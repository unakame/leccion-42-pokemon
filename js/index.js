'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search());

  root.append(wrapper);
}

//funcion anónima esencial para que se ejecute en jQuery
$(_ => {
  const root = $('#root');
  render(root);

})
