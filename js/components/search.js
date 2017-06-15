'use strict';

const Search = () => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>')
  const search = $('<div class="col-md-7"><div class="input-group"><span class="input-group-addon" id="basic-addon1"><i class="fa fa-search" id="basic-addon1"></i></span><input type="text" class="form-control" placeholder="Pokemon" ></div></div>');
  const button = $('<div class="col-md-1 col-md-offset-4"><button class="">A-Z</button></div>');

  row.append(search);
  row.append(button);
  container.append(row);

  return container;
}
