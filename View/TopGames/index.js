const parElement = document.querySelector('#topGames');

/**
 * Generate title for the top games section
 * @param {string} year - The year for the title
 * @returns {string} - Generated title HTML
 */
const generateTitle = (year) => {
  return `
    <h1 class='font-semibold text-3xl  animate-bounce'>
      برترین <span class='text-purple-800 dark:text-purple-500'>بازی های ویدیویی</span> ${year}
    </h1>`;
};

/**
 * Generate description for the top games section
 * @returns {string} - Generated description HTML
 */
const generateDescription = () => {
  return `<p class='md:text-lg text-sm'>
    در دنیای گیمینگ، هر ساله شاهد عرضه‌ی بازی‌هایی هستیم که باعث می‌شوند تا دل‌های هزاران بازی‌باز به هیجان بیفتند. اما بین این همه انتخاب، چگونه می‌توان بهترین‌ها را تشخیص داد؟ در صفحه‌ی ما، شما را به سفری در دنیای بهترین بازی‌های سال همراه می‌کنیم، جایی که جذابیت، هیجان، و هنر در طراحی بازی‌ها به یکدیگر می‌آمیزند. از جدیدترین تجربیات VR گرفته تا بهترین‌های دنیای RPG، همه در اینجا به شما پیشنهاد می‌شود. با ما همراه شوید و دنیای فراموش‌نشدنی بازی‌های برتر را کشف کنید.
  </p>`;
};

/**
 * Generate list of top games
 * @param {[]} topGames - Array of top games data
 * @returns {string} - Generated top games list HTML
 */
const generateTopGameList = (topGames) => {
  return topGames
    .map((topGame, index) => {
      return `
      <section class='flex flex-col space-y-5 dark:shadow-gray-800 p-5 rounded-xl shadow-lg shadow-gray-400 '>
        <h3 class='text-start text-xl'>${index + 1} . ${topGame.name}</h3>
        <img src='${
          topGame.bannerImage
        }' class="max-h-[600px] rounded-xl mt-1"/>
        <p class='text-sm'>${topGame.description}</p>
        <div class='mt-5 flex flex-col space-y-3'>
          ${topGame.story
            .map((storyItem) => {
              return `<p>${storyItem.description}</p>`;
            })
            .join('')}
        </div>
      </section>`;
    })
    .join('');
};

/**
 * Render top games section
 * @param {object} data - Data object containing year and top games array
 */
const render = (data) => {
  const { year, topGames } = data;
  parElement.innerHTML = `
    <div class='flex flex-col space-y-5 p-4 mt-4'>
      ${generateTitle(year)}
      ${generateDescription()}
      <div class='flex flex-col space-y-4'>
        ${generateTopGameList(topGames)}
      </div>
    </div>`;
};

export { render };
