import * as Theme from '../Theme';
const parElement = document.querySelector('#header');

const Banner = () => {
  return `
    <section class="relative">
      <img
        src="https://wenbstorage.storage.iran.liara.space/webgame/image/banner/1.jpg"
        alt="not found"
        class="h-[100vh] w-full object-fill"
      />
    </section>`;
};

const Menu = () => {
  return `
    <div class="absolute top-0 left-0 w-full flex items-center justify-around text-white bg-gray-500 bg-opacity-30 p-1">
       ${Theme.render()}  
    <section class="flex gap-10">
        <a href="/" class="text-xl">صفحه اصلی</a>
        <a href="/game" class="text-xl">بازی ها</a>
        <a href="/about" class="text-xl">درباره ما</a>
        <a href="/favorite" class="text-xl">علاقه مندی من</a>
      </section>
      <section class='flex items-center gap-2'>
      <a href="/">
        <img src="/image/logo/1.png" class="w-[10vh]" alt="not found"/>
      </a>
      </section>
    </div>`;
};

const scrollDown = () => {
  return `<div class='scrollDown absolute bottom-10 space-y-5 w-full text-center'>
  <button class=' w-14 h-14 flex mx-auto animate-bounce justify-center items-center rounded-full bg-blue-600 text-white transition duration-300 hover:bg-blue-700 hover:text-gray-100'>
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
};

export { render, handlerScrollDown };
