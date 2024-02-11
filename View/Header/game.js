import * as Theme from '../Theme';
const parElement = document.querySelector('#header');

const Menu = () => {
  return `
  <div class="absolute top-0 left-0 w-full flex items-center justify-around dark:text-white bg-gray-100 text-black dark:bg-gray-700 bg-opacity-30 p-1">
  ${Theme.render()}
  <section class="flex gap-10">
    <a href="/" class="text-lg">صفحه اصلی</a>
    <a href="/game" class="text-lg">بازی ها</a>
    <a href="/about" class="text-lg">درباره ما</a>
  </section>
  <section class='flex items-center gap-10'>
  <a href="/">
    <img src="/image/logo/1.png" class="w-[10vh]" alt="not found"/>
  </a>
  </section>
</div>`;
};

const render = () => {
  parElement.innerHTML = `${Menu()}`;
};

export { render };
