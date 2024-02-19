const parElement = document.querySelector('#genre');

// Render checkboxes based on the provided data
const renderGenreCheckBox = (data) => {
  const queryParams = new URLSearchParams(window.location.search);
  const currentGenre = queryParams.get('genre');
  return data
    .map((genre) => {
      const isChecked = genre === currentGenre ? 'checked' : '';
      return `
        <li class="w-full rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="${genre}-checkbox" type="checkbox" value="${genre}" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" ${isChecked}>
            <label for="${genre}-checkbox" class="w-full ca py-3 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">${genre}</label>
          </div>
        </li>
      `;
    })
    .join('');
};

// Render the genre checkboxes with a toggle button
const render = (data) => {
  parElement.innerHTML = `
    <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <section class='flex cursor-pointer items-center p-3 relative justify-between toggle_Genre'>
        <span class="text-xl text-gray-900 dark:text-white">سبک بازی</span>
        <i class="fas fa-arrow-down fa-xl"></i>
        <span class='absolute bottom-0 w-[90%] h-[2px] bg-gray-100'></span>
      </section>
      <div class='genre_List'>
        ${renderGenreCheckBox(data)}
      </div>
    </ul>
  `;
};

// Toggle the visibility of genre checkboxes
const toggleGenre = () => {
  const toggleGenre = document.querySelector('.toggle_Genre');
  const listPlatform = document.querySelector('.genre_List');

  toggleGenre.addEventListener('click', () => {
    listPlatform.classList.toggle('hidden');
    toggleGenre.classList.toggle('active');
    toggleGenre.innerHTML = `
      <span class="text-xl text-gray-900 dark:text-white">سبک بازی</span>
      <i class="fas ${
        toggleGenre.classList.contains('active')
          ? 'fa-arrow-up'
          : 'fa-arrow-down'
      } fa-xl"></i>
      ${
        toggleGenre.classList.contains('active')
          ? ''
          : `<span class='absolute bottom-0 w-[90%] h-[2px] bg-gray-100'></span>`
      }
    `;
  });
};

// Activate/deactivate checkboxes based on user selection
const handleCheckboxChange = (genre, checkbox) => {
  const queryParams = new URLSearchParams(window.location.search);

  queryParams.delete('genre');

  if (checkbox.checked) {
    queryParams.set('genre', genre);
  }
  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
  window.location.href = newUrl;
};

// Attach event listeners to checkboxes
const handlerActiveCheckBox = (data) => {
  data.forEach((genre) => {
    const checkbox = document.getElementById(`${genre}-checkbox`);
    checkbox.addEventListener('change', () => {
      handleCheckboxChange(genre, checkbox);
    });
  });
};

export { render, handlerActiveCheckBox, toggleGenre };
