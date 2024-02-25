import * as Theme from '../Theme';
const parElement = document.querySelector('#header');

const Menu = () => {
  return `
  <div class="flex items-center justify-around   dark:bg-gray-800  p-5
  w-[95%] mr-[2.5%] mt-3  dark:text-white  text-black  bg-gray-100 shadow   rounded-lg
  ">
  ${Theme.render()}
  <section class="flex gap-10">
    <a href="/" class="text-2xl">صفحه اصلی</a>
    <a href="/game" class="text-2xl">بازی ها</a>
    <a href="/about" class="text-2xl">درباره ما</a>
    <a href="/favorite" class="text-2xl">علاقه مندی من</a>
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
