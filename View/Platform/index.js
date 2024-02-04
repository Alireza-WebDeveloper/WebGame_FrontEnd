const parElement = document.createElement('div');
parElement.id = `#platform`;

const render = () => {
  document.querySelector('main').appendChild(parElement);
  parElement.innerHTML = `platform`;
};

export { render };
