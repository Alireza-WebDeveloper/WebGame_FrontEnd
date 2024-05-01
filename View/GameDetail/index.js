import { formatDate } from '../../Modules/FormatDate';

const parElement = document.querySelector('#gameDetail');

//!! Generate Rating On bannerImage
const generateRating = (rating) => {
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);

  return `
  <div class='flex  items-center'>
  <span class="text-lg font-bold capitalize ml-3">امتیاز بازی</span>
  <span class="text-gray-400 text-4xl">${emptyStars}</span>
  <span class="text-yellow-400 text-4xl">${filledStars}</span>
  </div>
  `;
};

//!! Generate Platform On bannerImage
const generatePlatform = (data) => {
  return data
    .map((item) => {
      return `<button class="capitalize   lg:px-4 lg:py-2 px-2 py-1 lg:text-lg text-sm  font-semibold rounded 
      bg-cyan-500 text-white hover:bg-cyan-700">${item}</button>`;
    })
    .join('');
};

// !! Generate Genre on Banner Game
const generateGenre = (data) => {
  return data
    .map((item) => {
      return `<button class="capitalize  lg:px-4 lg:py-2 px-2 py-1 lg:text-lg text-sm font-semibold rounded 
      bg-blue-500 text-white hover:bg-blue-700">${item}</button>`;
    })
    .join('');
};

// !! Generate Video
const generateVideo = (trailer) => {
  return `
  <div class='w-[80%] mx-auto'>
   <section>
   <video
   preload="none"
    id="my-player"
    class="video-js vjs-default-skin vjs-big-play-centered"
    controls
    poster="${trailer.poster}"
    data-setup='{"fluid": true}'>
    <source src="${trailer.url}" type="video/mp4"></source>
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank">
        supports HTML5 video
      </a>
    </p>
  </video>
   </section>
  </div>
  `;
};

const optionVideo = () => {
  var options = {};

  var player = videojs('my-player', options, function onPlayerReady() {
    videojs.log('Your player is ready!');
    // How about an event listener?
    this.on('ended', function () {
      videojs.log('Awww...over so soon?!');
    });
  });
};

// !! Generate Banner
const generateBanner = (game) => {
  return `
  <div class="relative text-white">
    <img src="${
      game.bannerImage
    }" class="object-fill  min-h-[96] w-full" alt="پیدا نشد"/>
    <section class="absolute flex-col top-0 left-0 w-full h-full rounded-xl flex justify-end items-start p-4 space-y-8">
      <h1 class="lg:text-5xl md:text-3xl max-sm:sm:text-sm font-bold capitalize">بررسی بازی ${
        game.name
      }</h1>
      <div class="lg:flex   sm:hidden max-sm:hidden flex-col">
        <div class='flex gap-3 items-center'>
        ${generateGenre(game.genre)}
        ${generatePlatform(game.platform)}
        </div>
      </div>
      <section class="flex gap-2 items-center text-lg">
        <span class="font-semibold">تاریخ انتشار</span>:
        <span>${formatDate(game.releaseYear)}</span>
      </section>
      <section>
      ${generateRating(4)}
      </section>
    </section>
  </div>
  `;
};

// !! Generate Description Game
const generateDescription = (description) => {
  return `
  <section>
    <p class="lg:text-xl  sm:max-lg:text-sm  justify-start lg:w-[80%] m-auto w-full p-4 ">${description}</p>
  </section>
  `;
};

// !! Generate Game Result
const generateResultGame = (review) => {
  return `
    <div class='grid md:grid-cols-2 sm:grid-cols-1 gap-10 container mx-auto p-4'>
      <section class='p-4 mt-5  shadow-lg dark:shadow-slate-500 dark:bg-gray-800 flex flex-col space-y-5 rounded'>
        <h3 class='flex items-center mb-2 text-3xl font-semibold text-gray-900 dark:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          نقاط قوت بازی
        </h3>
        <ol class="max-w-md space-y-5 text-gray-500 dark:text-white list-decimal list-inside  ">
           ${review.positive
             .map((reviewPositive) => {
               return `<li class='text-lg'>${reviewPositive}</li>`;
             })
             .join('')}
        </ol>
      </section>
      <section class='p-4 mt-5 shadow-lg dark:shadow-slate-500 dark:bg-gray-800 flex flex-col space-y-5 rounded'>
        <h3 class='flex items-center mb-2 text-3xl font-semibold text-gray-900 dark:text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          نقاط ضعف بازی
        </h3>
        <ol class="max-w-md space-y-5 text-gray-500 dark:text-white list-decimal list-inside ">
        ${review.negative
          .map((reviewNegative) => {
            return `<li class='text-lg'>${reviewNegative}</li>`;
          })
          .join('')}
        </ol>
      </section>
    </div>
  `;
};

// !! Render Game Story
const generateStory = (stories) => {
  return `
  <section class="flex flex-col space-y-10 mt-4">
    <h1 class="text-4xl font-semibold capitalize text-center animate-pulse">داستان بازی</h1>
    ${stories
      .map((story) => {
        return `
      <section class="flex flex-col space-y-5 border w-[80%]  mx-auto rounded-xl p-2">
      <img loading="lazy" src="${story.image}" class="lg:h-[90vh] md:h-[65vh] sm:max-md:h-[45vh] h-[30vh] rounded-xl   mt-1  object-fill" alt="پیدا نشد"/>
        <p class="lg:text-xl sm:max-lg:text-sm text-center">${story.description}</p>
      </section>
      `;
      })
      .join('')}
  </section>
  `;
};

// !! Render Main Page
const render = (game) => {
  parElement.innerHTML = `
   <div class='flex flex-col space-y-5 '>
   ${generateBanner(game)}
   ${generateDescription(game.description)}
   ${generateVideo(game.trailer)}
   ${generateStory(game.story)}
   ${generateResultGame(game.review)}
   </div>
  `;
};

// !! Page Title
const TitlePage = (gameName) => {
  document.title = `معرفی بازی | ${gameName}`;
};

export { render, optionVideo, TitlePage };

//  <h2 class="text-3xl font-semibold">${story.title}</h2>
