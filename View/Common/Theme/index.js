// !! import Packaes
import * as LocalStorage from '../../../Modules/LocalStorage';
// !! Dom
const htmlDom = document.querySelector('html');
const storedTheme = LocalStorage.get('theme', 'light');

// !! Generate Main
const render = () => {
  const themeIcon = storedTheme === 'dark' ? 'fa-moon' : 'fa-sun';
  const iconClass = storedTheme === 'dark' ? 'text-gray-200' : '';

  return `
    <section class='cursor-pointer' id='toggle_Theme'>
      <i class="fa ${themeIcon} text-4xl ${iconClass}"></i>
    </section>
  `;
};

// !! Generate Update Theme Icon
const updateThemeIcon = (value) => {
  const icon = value === 'light' ? 'fa-sun' : 'fa-moon';
  toggle_Theme.innerHTML = `<i class="fa ${icon} text-4xl"></i>`;
};

// !! Handler Change Theme
const changeTheme = () => {
  const toggleTheme = document.querySelector('#toggle_Theme');
  toggleTheme.addEventListener('click', () => {
    if (htmlDom.classList.contains('light')) {
      htmlDom.classList.remove('light');
      htmlDom.classList.add('dark');
      LocalStorage.set('theme', 'dark');
      updateThemeIcon('dark');
    } else {
      htmlDom.classList.remove('dark');
      htmlDom.classList.add('light');
      LocalStorage.set('theme', 'light');
      updateThemeIcon('light');
    }
  });
};
// !! Default Theme
const setInitialTheme = () => {
  htmlDom.classList.toggle('dark', storedTheme === 'dark');
  htmlDom.classList.toggle('light', storedTheme !== 'dark');
};

export { render, changeTheme, setInitialTheme };
