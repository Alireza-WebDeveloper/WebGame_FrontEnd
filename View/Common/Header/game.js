import * as Theme from '../Theme';
const parElement = document.querySelector('#header');

const Menu = () => {
  return `
  <div class="flex items-center justify-around   dark:bg-gray-800  p-5
  sm:max-xl:container sm:max-xl:mx-auto   dark:text-white  text-black  bg-gray-100 shadow 
  ">
  ${Theme.render()}
  <section class="flex gap-10">
    <a href="/" class="text-2xl">صفحه اصلی</a>
    <a href="/game" class="text-2xl">بازی ها</a>
    <a href="/about" class="text-2xl">درباره ما</a>
    <a href="/favorite" class="text-2xl">علاقه مندی من</a>
    ${generateTopGameMenu()}
  </section>
  <section class='flex items-center gap-10'>
  <a href="/">
    <img loading="lazy" src="/image/logo/1.png" class="w-[10vh]" alt="not found"/>
  </a>
  </section>
</div>`;
};

const generateTopGameMenu = () => {
  return `<div class="relative z-40">
  <button id="dropdownButton" class="text-2xl">
    معرفی برترین بازی‌ها
  </button>
  <div id="dropdownMenu" class="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg hidden p-3 space-y-3 dark:bg-gray-800">
    <a href="/topGames/2024" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2024</a>
    <a href="/topGames/2023" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2023</a>
    <a href="/topGames/2022" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2022</a>
    <a href="/topGames/2021" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2021</a>
  </div>
</div>
`;
};

const handlerDropdownTopGamesMenu = () => {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdownButton.addEventListener('click', function () {
    dropdownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', function (event) {
    if (
      !dropdownButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add('hidden');
    }
  });

  const menuItems = document.querySelectorAll('#dropdownMenu > a');
  menuItems.forEach((item) => {
    item.addEventListener('click', function () {
      const selectedItem = item.textContent;
      dropdownMenu.classList.add('hidden');
    });
  });
};

const render = () => {
  parElement.innerHTML = `${Menu()}`;
};

export { render, handlerDropdownTopGamesMenu };
