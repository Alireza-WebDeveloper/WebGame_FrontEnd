// !! Packages
import LazyLoad from 'vanilla-lazyload';
import Swal from 'sweetalert2';
// !! Dom
const parElement = document.querySelector('#favoriteGame');

// !! handler Delete Favorite Game From List
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

// !! Generate Genre on GameList
const generateGenre = (data) => {
  return data
    .map((genre) => {
      return `<span class='font-semibold bg-purple-700 px-3    text-sm py-1.5 rounded-full'>${genre}</span>`;
    })
    .join('');
};

// !! Generate Game List
const generateGameList = (data) => {
  return data
    .map((game) => {
      return ` 
      <div class='shadow-md  shadow-gray-900 flex rounded-md relative'>
      <img loading="lazy" class='h-60 rounded-md w-full lazy' data-src='${
        game.bannerImage
      }' alt="پیدا نشد"/>
      <div class='absolute z-20 p-4 top-0 left-0 text-white w-full h-full rounded flex flex-col space-y-4 justify-end'>
        <div class='flex gap-2 flex-wrap'>
          ${generateGenre(game.genre)}
        </div>
        <h1 class='font-semibold text-xl'>${game.name}</h1>
        <p class='md:flex hidden'>${game.description.slice(0, 100)}...</p>
        <a href='/game/${
          game._id
        }' class='px-2 py-1 border-2 bg-blue-500 cursor-pointer w-fit rounded-md'>جزییات بیشتر</a>
      </div>
      <section class='absolute z-20 top-0 left-0 pl-2 pt-2'>
      <button data-code="${game._id}" class='btn_deleteGameFavorite'>
      <i class="fas fa-heart text-2xl text-red-500"></i>
      </button>
      </section>
      <div class='absolute inset-0 z-10 top-0 bg-gray-800 opacity-20  rounded'></div>
      </div>`;
    })
    .join('');
};

// !! Main Render ParElement (Empty)
const generateEmpty = () => {
  parElement.innerHTML = `<div class='relative h-[100vh] flex justify-center items-center p-4'>
  <p class='text-2xl transition animate-bounce'> لیست علاقه مندی وجود ندارد</p>
 </div>`;
};

// !! Main Render ParElement
const render = (data) => {
  if (data.length >= 1) {
    parElement.innerHTML = `<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-2 relative">
   ${generateGameList(data)}
   </div>
  `;
    new LazyLoad({
      elements_selector: '.lazy',
    });
  } else {
    generateEmpty();
  }
};

// !! Page Title
const Title = () => {
  document.title = 'علاقه مندی ها';
};

const addGameFavoriteMessage = () => {
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'بازی به لیست علاقه مندی اضافه شد',
    showConfirmButton: false,
    timer: 1000,
  });
};

const deleteGameFavoriteMessage = () => {
  Swal.fire({
    position: 'top-center',
    icon: 'error',
    title: 'بازی از لیست علاقه مندی حذف شد',
    showConfirmButton: false,
    timer: 1000,
  });
};
export {
  render,
  handlerDeleteGameFavorite,
  Title,
  addGameFavoriteMessage,
  deleteGameFavoriteMessage,
};
