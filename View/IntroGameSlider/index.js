const parElement = document.querySelector('#introGameSlider');
import Swiper from '../../node_modules/swiper/swiper-bundle.mjs';
import '../../node_modules/swiper/swiper-bundle.min.css';

const setOptions = () => {
  new Swiper('.swiper-container', {
    // تنظیمات Swiper به دلخواه شما
    slidesPerView: 6,
    spaceBetween: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      // تنظیمات برای وضعیت‌های مختلف صفحه
      0: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
    },
  });
};

const generateGenre = (data) => {
  return data
    .map((genre) => {
      return `<span class='w-8 h-8 font-semibold bg-purple-700 px-4 py-2 rounded-full'>${genre}</span>`;
    })
    .join('');
};

const generateGameSlider = (data) => {
  return data
    .map((game) => {
      return `<div class="swiper-slide mr-5">
    <a href='/game/${game._id}' class='flex rounded-md relative'>
      <img class='h-60 rounded-md w-full lazy' src='${
        game.bannerImage
      }' alt='not found'/>
      <div class='absolute z-20 p-4 top-0 left-0 text-white w-full h-full rounded flex flex-col space-y-1 justify-end'>
        <h1 class='font-semibold text-xl'>assisance creed valha</h1>
        <p>${game.description.slice(0, 40)}...</p>
        <section class='flex items-center gap-1'>
        <span class="text-yellow-400 text-xl">☆</span>
        <span>${game.score}/5</span>
        </section>
      </div>
      <div class='absolute inset-0 z-10 top-0 bg-gray-800 opacity-20 rounded'></div>
      </a>
    </div>`;
    })
    .join('');
};

const render = (data) => {
  console.log(data);
  parElement.innerHTML = `
  <div class="swiper-container">
  <div class="swiper-wrapper">
  ${generateGameSlider(data)}
  </div>
 </div>
 `;
};

export { render, setOptions };
