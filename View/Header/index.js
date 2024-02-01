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

const scrollDown = () => {
  return `<div class='absolute bottom-10 space-y-5 w-full text-center'>
  <button class=' w-14 h-14 flex mx-auto animate-bounce justify-center items-center rounded-full bg-blue-500 text-white transition duration-300 hover:bg-blue-500 hover:text-gray-100'>
      <i class="fas fa-arrow-down fa-xl"></i>
  </button>
</div>
`;
};

const render = () => {
  parElement.innerHTML = `${Banner()}${Menu()}${scrollDown()}`;
};

export { render };
