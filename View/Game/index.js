import LazyLoad from 'vanilla-lazyload';

const parElement = document.querySelector('#game');

const generateGenre = (data) => {
  return data
    .map((genre) => {
      return `<span class='w-8 h-8 font-semibold bg-purple-700 px-4 py-2 rounded-full'>${genre}</span>`;
    })
    .join('');
};

const generateGameList = (data) => {
  return data
    .map((game) => {
      return `<a href='/game/${
        game._id
      }' class='shadow-md  shadow-gray-900 flex rounded-md relative'>
      <img class='h-60 rounded-md w-full lazy' data-src='${
        game.bannerImage
      }' alt='not found'/>
      <div class='absolute z-20 p-4 top-0 left-0 text-white w-full h-full rounded flex flex-col space-y-3 justify-end'>
        <div>
          ${generateGenre(game.genre)}
        </div>
        <h1 class='font-semibold text-xl'>${game.name}</h1>
        <p>${game.description.slice(0, 100)}...</p>
      </div>
      <div class='absolute inset-0 z-10 top-0 bg-gray-800 opacity-20 rounded'></div>
      </a>`;
    })
    .join('');
};

const loading = () => {};

const render = (data) => {
  parElement.innerHTML = `
   ${generateGameList(data)}
  `;
  new LazyLoad({
    elements_selector: '.lazy',
  });
};

export { render, loading };
