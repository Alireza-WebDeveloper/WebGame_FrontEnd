const parElement = document.createElement('div');
import * as Platform from '../Platform/index';
parElement.id = `#game`;
parElement.classList.add('mt-20');

const render = () => {
  document.querySelector('main').appendChild(parElement);
  parElement.innerHTML = `
  ${Platform.render()}
  <p>صفحه بازی ها </p>`;
};

export { render };
