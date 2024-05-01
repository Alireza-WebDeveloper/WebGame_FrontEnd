import * as Routes from './data';
const toggleSideBar = () => {
  return ` 
      <span id='toggleSideBar' class="cursor-pointer flex lg:hidden">
        <i class="fa-solid fa-bars fa-lg"></i>
      </span>
     `;
};
const render = () => {
  let isOpen = false;

  const toggleSideBar = () => {
    if (isOpen) {
      const sidebar = document.querySelector('#app > .sidebar');
      sidebar.style.transform = 'translateX(100%)';

      sidebar.remove();

      isOpen = false;
    } else {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `<div class='fixed lg:hidden flex overflow-y flex-col top-0 right-0 p-4 z-50 text-black shadow bg-gray-200 dark:bg-gray-800 dark:text-white   md:w-1/3  max-sm:1/2 h-full sidebar-open' style="transform: translateX(100%)">
        <span id='close_SideBar' class='cursor-pointer'>
        <i class="fa fa-window-close" aria-hidden="true"></i>
        </span>
        <section class="flex flex-col gap-3 ">
           ${Routes.render()}
          <button id="dropdownButton" class="text-lg flex items-center gap-2 justify-between w-full px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded">
         <span> معرفی برترین بازی‌ها</span>
         <i class='fa fa-arrow-down'></i>
        </button>
        <div id="dropdownContent" class="hidden bg-gray-300 p-1">
        <a href="/topGames/2024" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2024</a>
        <a href="/topGames/2023" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2023</a>
        <a href="/topGames/2022" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2022</a>
        <a href="/topGames/2021" class="block px-4 py-2 rounded text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900">بازی ویدیویی 2021</a>
        </div>
        </section>
        </div>`;
      newDiv.classList.add('sidebar');
      document
        .querySelector('#app')
        .insertAdjacentElement('afterbegin', newDiv);

      setTimeout(() => {
        newDiv.querySelector('.sidebar-open').style.transform = 'translateX(0)';
      }, 50);
      isOpen = true;

      document.getElementById('close_SideBar').addEventListener('click', () => {
        const sidebar = document.querySelector('#app > .sidebar');
        sidebar.style.transform = 'translateX(100%)';
        setTimeout(() => {
          sidebar.remove();
        }, 300);
        isOpen = false;
      });

      document
        .getElementById('dropdownButton')
        .addEventListener('click', () => {
          const dropdownContent = document.getElementById('dropdownContent');
          dropdownContent.classList.toggle('hidden');

          const arrowIcon = document.querySelector('#dropdownButton i');
          arrowIcon.classList.toggle('fa-arrow-down');
          arrowIcon.classList.toggle('fa-arrow-up');
        });
    }
  };

  document
    .querySelector('#toggleSideBar')
    .addEventListener('click', toggleSideBar);
};

export { toggleSideBar, render };
