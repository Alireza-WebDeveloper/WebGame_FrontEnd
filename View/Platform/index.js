const parElement = document.querySelector('#platform');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const platformQuery = urlParams.get('platform');

const PlatformEnum = [
  'playstation',
  'xbox',
  'steam',
  'pc',
  'android',
  'ios',
  'nintendo',
  'epicgamesstore',
  'all',
];

const generatePlatformList = () => {
  return PlatformEnum.map((platform) => {
    return `<a class='text-lg  
    ${platformQuery === platform ? 'bg-gray-950' : 'bg-gray-800'} 
    px-4 py-2 rounded-3xl capitalize font-semibold' 
    href='/game?platform=${platform}'>
    ${platform}
    </a>`;
  }).join('');
};

const render = () => {
  parElement.innerHTML = `<div class='flex gap-8 justify-center flex-wrap'>
   ${generatePlatformList()}
  </div>`;
};

export { render };
