const parElement = document.querySelector('#introGameSlider');
import Swiper from 'swiper';
import '../../../node_modules/swiper/swiper-bundle.min.css';

// !! Stop Option Responsive Swiper Slider
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
// !! Generate Game Sliders
const generateGameSlider = (data) => {
  return data
    .map((game) => {
      return `<div class="swiper-slide mr-5">
    <a href='/game/${game._id}' class='flex rounded-md relative'>
      <img loading="lazy" class='h-60 rounded-md w-full lazy' src='${
        game.bannerImage
      }' alt='not found' alt="پیدا نشد"/>
      <div class='absolute z-20 p-4 top-0 left-0 text-white w-full h-full rounded flex flex-col space-y-1 justify-end'>
        <h1 class='font-semibold text-xl'>
        ${game.name}</h1>
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

// !! Generate Main
const render = (data) => {
  parElement.innerHTML = `
  <div class="swiper-container">
  <div class="swiper-wrapper">
  ${generateGameSlider(data)}
  </div>
 </div>
 `;
};

export { render, setOptions };
