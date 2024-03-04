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
    .map((topGame, index, array) => {
      return `
      <section class='grid lg:grid-cols-2 sm:grid-cols-1 gap-3  rounded  shadow'/>
      <div>
      <img src='${topGame.bannerImage}' class="h-96 w-full mt-1 rounded"/>  
      </div>
      <div class='flex flex-col space-y-3 p-3'>
      <h1 class='capitalize  text-3xl text-purple-800 dark:text-purple-500'>${
        array.length - index
      }.${topGame.name}</h1>
      <div class='flex items-center gap-1 text-xl'>
      <span class='font-semibold'>سازنده : </span>
      <span>Jumpship</span>
      </div>
      <div class='flex items-center gap-1 text-xl'>
      <span class='font-semibold'>پلتفرم : </span>
      <div class='flex gap-2'>
      <span>pc , </span>
      <span>xbox , </span>
      <span>playstation</span>
      </div>
      </div>
      <p class='text-lg text-justify text-gray-600 dark:text-gray-300'>${
        topGame.description
      }</p>
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
