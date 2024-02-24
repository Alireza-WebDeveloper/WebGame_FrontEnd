import LazyLoad from 'vanilla-lazyload';

const parElement = document.querySelector('#game');

const generateGenre = (data) => {
  return data
    .map((genre) => {
      return `<span class='w-8 h-8 font-semibold bg-purple-700 px-4 py-2 rounded-full'>${genre}</span>`;
    })
    .join('');
};

// Handler Add And Remove Favorites

/**
 *
 * @param {function} callback
 * @param {object} Store
 */
const handlerAddGameFavorite = (callback, gameStore) => {
  parElement.addEventListener('click', (e) => {
    const button = e.target.closest('.btn_addGameFavorite');
    if (button) {
      let id = button.getAttribute('data-code');

      let gameFind = gameStore.find((game) => game._id === id);
      callback(gameFind);
    }
  });
};
const handlerDeleteGameFavorite = (callback, gameStore) => {
  parElement.addEventListener('click', (e) => {
    const button = e.target.closest('.btn_deleteGameFavorite');
    if (button) {
      let id = button.getAttribute('data-code');

      let gameFind = gameStore.find((game) => game._id === id);
      callback(gameFind);
    }
  });
};

const createButtonFavorite = (game, gameFavoriteData) => {
  const findGame = gameFavoriteData.find(
    (favorite) => favorite._id === game._id
  );
  if (findGame) {
    return `<section class='absolute z-20 top-0 left-0 pl-2 pt-2'>
    <button data-code="${game._id}" class='btn_deleteGameFavorite'>
    <i class="fas fa-heart text-2xl text-red-500"></i>
    </button>
    </section>`;
  } else {
    return `<section class='absolute z-20 top-0 left-0 pl-2 pt-2'>
    <button data-code="${game._id}" class='btn_addGameFavorite'>
    <i class="far fa-heart text-2xl text-red-500"></i>
    </button>
    </section>`;
  }
};

const generateGameList = (data, gameFavoriteData) => {
  return data
    .map((game) => {
      return ` 
      <div class='shadow-md  shadow-gray-900 flex rounded-md relative'>
      <img class='h-72 rounded-md w-full lazy' data-src='${
        game.bannerImage
      }' alt='not found'/>
      <div class='absolute z-20 p-4 top-0 left-0 text-white w-full h-full rounded flex flex-col space-y-4 justify-end'>
        <div>
          ${generateGenre(game.genre)}
        </div>
        <h1 class='font-semibold text-xl'>${game.name}</h1>
        <p>${game.description.slice(0, 100)}...</p>
        <a href='/game/${
          game._id
        }' class='px-2 py-1 border-2 hover:bg-blue-600 border-blue-500 cursor-pointer w-fit rounded-md'>جزییات بیشتر</a>
      </div>
       ${createButtonFavorite(game, gameFavoriteData)}
      <div class='absolute inset-0 z-10 top-0 bg-gray-800 opacity-20 rounded'></div>
      </div>`;
    })
    .join('');
};

const loading = () => {};

const render = (data, gameFavoriteData) => {
  parElement.innerHTML = `
   ${generateGameList(data, gameFavoriteData)}
  `;
  new LazyLoad({
    elements_selector: '.lazy',
  });
};

export { render, loading, handlerAddGameFavorite, handlerDeleteGameFavorite };
