import * as Theme from '../Theme';
import * as SideBar from './SideBar';
import * as Routes from './data';
const parElement = document.querySelector('#header');

const Banner = () => {
  return `
  <section class="relative h-96 lg:h-[120vh] md:h-[80vh] sm:h-[60vh] max-sm:h-[40vh]">
  <img
    loading="lazy"
    src="https://wenbstorage.storage.iran.liara.space/webgame/image/banner/1.jpg"
    alt="not found"
    class="w-full h-full object-cover"
  />
</section>
`;
};

const generateTopGameMenu = () => {
  return `<div class="relative z-40">
  <button id="dropdownButton" class="text-2xl">
    معرفی برترین بازی‌ها
  </button>
  <div id="dropdownMenu" class="absolute z-50 top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg hidden p-3 space-y-3 dark:bg-gray-800">
  ${Routes.render()}
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

const Logo = () => {
  return `<section class='flex items-center gap-2'>
  <a href="/">
    <img loading="lazy" src="/image/logo/1.png" class="lg:w-[7vh] w-[10vh]" alt="پیدا نشد"/>
  </a>
  </section>`;
};

const Menu = () => {
  return `
    <div class="absolute  flex  top-0 left-0 w-[95%] ml-[2.5%] mt-3  items-center lg:justify-around justify-between text-black shadow bg-gray-200 dark:bg-gray-800 dark:text-white bg-opacity-70 p-5 rounded-lg">
     ${SideBar.toggleSideBar()}
     ${Theme.render()}
    <section class="lg:flex gap-10 hidden">
        <a href="/" class="text-2xl">صفحه اصلی</a>
        <a href="/game" class="text-2xl">بازی ها</a>
        <a href="/about" class="text-2xl">درباره ما</a>
        <a href="/favorite" class="text-2xl">علاقه مندی من</a>
        ${generateTopGameMenu()}
      </section>
     <div class='lg:flex hidden'>
     ${Logo()}
     </div>
    </div>`;
};

const scrollDown = () => {
  return `<div class='scrollDown absolute bottom-10 space-y-5 w-full text-center lg:flex hidden'>
  <button aria-label="Scroll down" class="w-20 h-20 flex mx-auto animate-bounce justify-center items-center rounded-full bg-blue-600 text-white transition duration-300 hover:bg-blue-700 hover:text-gray-100">
  <i class="fas fa-arrow-down fa-xl"></i>
</button>
</div>
`;
};

const handlerScrollDown = () => {
  let scrollDown = document.querySelector('.scrollDown');
  let scrollDownTarget = document.querySelector('#landingTitle');
  scrollDown.addEventListener('click', () => {
    scrollDownTarget.scrollIntoView({
      behavior: 'smooth',
    });
  });
};

const render = () => {
  parElement.innerHTML = `${Banner()}${Menu()}${scrollDown()}`;
  SideBar.render();
};

export { render, handlerScrollDown, handlerDropdownTopGamesMenu };
