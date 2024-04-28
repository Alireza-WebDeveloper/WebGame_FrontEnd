// !! DOM
const parElement = document.querySelector('#gameLanding');

// !! Animation Game List
const handleStartAnimation = (elem, e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 60;

  elem.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
};

const handleCloseAnimation = (elem) => {
  elem.style.transform = 'rotateX(0deg) rotateY(0deg)';
};

const AnimationGameLandingItem = () => {
  document.querySelectorAll('.gameLanding-Item').forEach((elem) => {
    elem.addEventListener('mousemove', (e) => handleStartAnimation(elem, e));

    elem.addEventListener('mouseleave', () => {
      handleCloseAnimation(elem);
    });
  });
};

// !! Generate Game List
const generateGameLandingList = (data) => {
  return data
    .map(
      ({ platform, image, description }, index) => `
      <a href="/game?platform=${platform}" class='flex gameLanding-Item overflow-hidden flex-col rounded relative items-center ${
        index % 2 === 0 ? 'row-span-2' : 'row-span-1'
      }'>
        <img loading="lazy" class='w-full h-full object-cover rounded-md' src='${image}' alt='not found'/>
       
        <div class='absolute gameLanding-Info inset-0 flex text-white flex-col space-y-2 justify-center items-center bg-gray-800 bg-opacity-80 rounded'>
          <h2 class='text-2xl font-semibold'>${platform}</h2>
          <p class='text-lg font-mono text-center'>${description}</p>
        </div>
      </a>`
    )
    .join('');
};

// !! Generate Button Link View More
const generateViewMoreLink = () => {
  return `<div class='flex justify-center mt-3'>
    <a href='/game' type="button" class="text-white capitalize text-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">موارد بیشتر</a>
   </div>`;
};

// !! Generate Page Title
const generateTitle = () => {
  return `<h1 id='landingTitle' class="text-3xl font-semibold capitalize text-center animate-pulse">
    با ما بهترین را تجربه کنید
  </h1>`;
};

const TitlePage = () => {
  document.title = 'وب گیم | Web Game';
};

// !! Main Render ParElement
const render = (data) => {
  document.querySelector('main').appendChild(parElement);
  parElement.innerHTML = `
    ${generateTitle()}
    <div class="grid grid-cols-4 grid-rows-5 h-[150vh] gap-y-2 gap-x-3 p-2 mt-10">
      ${generateGameLandingList(data)}
    </div>
    ${generateViewMoreLink()}`;
};

export { render, AnimationGameLandingItem, TitlePage };
