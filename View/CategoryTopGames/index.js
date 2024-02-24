const parElement = document.querySelector('#category_TopGames');

const render = () => {
  parElement.innerHTML = ` <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
    <a href='/topGames/2024'>
    <section
      class="p-5 h-44 flex justify-center items-center cursor-pointer shadow-md shadow-black text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      <h3 class="text-xl font-semibold">
        معرفی برترین بازی های ویدیویی 2024
      </h3>
    </section>
    </a>
    <a href='/topGames/2023'>
    <section
      class="p-5 h-44 flex justify-center items-center cursor-pointer shadow shadow-black text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      <h3 class="text-xl font-semibold">
        معرفی برترین بازی های ویدیویی 2023
      </h3>
    </section>
    </a>
    <a href='/topGames/2022'>
    <section
      class="p-5 h-44 flex justify-center items-center cursor-pointer shadow shadow-black text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      <h3 class="text-xl font-semibold">
        معرفی برترین بازی های ویدیویی 2022
      </h3>
    </section>
    </a>
    <a href='/topGames/2021'>
    <section
      class="p-5 h-44 flex justify-center items-center cursor-pointer shadow shadow-black text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      <h3 class="text-xl font-semibold">
        معرفی برترین بازی های ویدیویی 2021
      </h3>
    </section>
    </a>
  </div>`;
};

export { render };
