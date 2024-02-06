const parElement = document.querySelector('#gameList');

const generatePlatform = (platforms) => {
  return platforms
    .map(
      (platform, index) => `
      <span class='bg-gray-500 text-white font-semibold px-4 rounded capitalize'>${platform}</span>
      `
    )
    .join('');
};

const generateGameList = (data) => {
  return data
    .map(
      (game, index) => `
      <section class='flex flex-col space-y-2 relative p-3 border rounded'>
      <img src='${
        game.bannerImage
      }' alt='not found' class='rounded  object-fill h-60'/>
      <div class='relative flex gap-2'>
      ${generatePlatform(game.platform)}
      </div>
      </section>
      `
    )
    .join('');
};

const render = (data) => {
  parElement.innerHTML = `
  ${generateGameList(data)}
  `;
};

export { render };
