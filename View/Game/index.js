const parElement = document.createElement('div');
parElement.id = `#game`;
parElement.classList.add('mt-20');

const render = () => {
  document.querySelector('main').appendChild(parElement);
  parElement.innerHTML = `<p>صفحه بازی ها </p>`;
};

export { render };
