import { formatDate } from '../../Modules/FormatDate';

const parElement = document.querySelector('#gameDetail');

const generateButton = (data, bgColor) => {
  return data
    .map((item) => {
      return `<button class="capitalize px-4 py-2 text-lg font-semibold rounded bg-${bgColor}-500 text-white hover:bg-${bgColor}-700">${item}</button>`;
    })
    .join('');
};

const generateBanner = (game) => {
  return `
  <div class="relative text-white">
    <img src="${
      game.bannerImage
    }" class="object-cover rounded-xl h-[100vh] w-full"/>
    <section class="absolute flex-col top-0 left-0 w-full h-full rounded-xl flex justify-end items-start p-4 space-y-8">
      <h1 class="text-5xl font-bold capitalize">بررسی بازی ${game.name}</h1>
      <div class="flex gap-3">
        ${generateButton(game.genre, 'blue')}
        ${generateButton(game.platform, 'green')}
      </div>
      <section class="flex gap-2 items-center text-lg">
        <span class="font-semibold">تاریخ انتشار</span>:
        <span>${formatDate(game.releaseYear)}</span>
      </section>
    </section>
  </div>
  `;
};

const generateDescription = (description) => {
  return `
  <section>
    <p class="text-2xl">${description}</p>
  </section>
  `;
};

const generateStory = (stories) => {
  return `
  <section class="flex flex-col space-y-3 mt-4">
    <h1 class="text-4xl font-semibold capitalize text-center animate-pulse">داستان بازی</h1>
    ${stories
      .map((story) => {
        return `
      <section class="flex flex-col space-y-4">
        <h2 class="text-3xl font-semibold">${story.title}</h2>
        <p class="text-xl">${story.description}</p>
        <img src="${story.image}" class="h-[70vh] w-[90%] mr-[5%] rounded object-fill" alt="پیدا نشد"/>
      </section>
      `;
      })
      .join('')}
  </section>
  `;
};

const render = (game) => {
  parElement.innerHTML = `
   <div class='flex flex-col space-y-5 mt-2'>
   ${generateBanner(game)}
   ${generateDescription(game.description)}
   ${generateStory(game.story)}
   </div>
  `;
};

export { render };
