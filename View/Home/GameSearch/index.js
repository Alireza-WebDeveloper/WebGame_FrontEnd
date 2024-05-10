const gameSearch = document.querySelector('#game_Search');
const queryParams = new URLSearchParams(window.location.search);
const inputValue = () => gameSearch.querySelector('input').value;

const render = () => {
  gameSearch.innerHTML = `<div class="relative">
  <span class="absolute right-2 top-1/2 transform cursor- hover:bg-gray-50 cursor-pointer -translate-y-1/2 bg-gray-100 dark:bg-gray-600 h-8 w-8 rounded-full flex items-center justify-center"><i class="fa fa-search fa-lg" aria-hidden="true"></i></span>
  <input autocomplete="off"  class="appearance-none  h-12 block w-full text-left bg-white dark:border-slate-400 dark:text-white dark:bg-slate-700 text-gray-700 border  rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200" id="grid-first-name" type="text">
</div>`;
};

/**
 *
 * @param {{}} queryParams
 * @returns
 */
const setOnUrl = (queryParams) =>
  (window.location.href = `${
    window.location.pathname
  }?${queryParams.toString()}`);

const initialValue = () => {
  const queryName = queryParams.get('name') ? queryParams.get('name') : '';
  gameSearch.querySelector('input').value = queryName;
};

const handlerGameSearch = () => {
  gameSearch.querySelector('span').addEventListener('click', () => {
    const value = inputValue();
    queryParams.set('name', value);
    setOnUrl(queryParams);
  });
};

export { render, initialValue, handlerGameSearch };
