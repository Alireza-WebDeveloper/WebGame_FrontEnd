const parElement = document.querySelector('#header');

const Menu = () => {
  return `
    <div class="fixed top-0 left-0 w-full flex items-center justify-around text-white bg-gray-500 bg-opacity-30 p-1">
      <section class="flex gap-10">
        <a href="/" class="text-lg">صفحه اصلی</a>
        <a href="/game" class="text-lg">بازی ها</a>
        <a href="/about" class="text-lg">درباره ما</a>
      </section>
      <a href="/">
        <img src="/image/logo/1.png" class="w-[10vh]" alt="not found"/>
      </a>
    </div>`;
};

const render = () => {
  parElement.innerHTML = `${Menu()}`;
};

export { render };
