const parElement = document.querySelector('#platform');

// !! Render checkboxes based on the provided data
const renderPlatformCheckBox = (data) => {
  const queryParams = new URLSearchParams(window.location.search);
  const currentPlatform = queryParams.get('platform');
  return data
    .map((platform) => {
      const isChecked = platform === currentPlatform ? 'checked' : '';
      return `
        <li class="w-full rounded-t-lg dark:border-gray-600">
          <div class="flex items-center ps-3">
            <input id="${platform}-checkbox" type="checkbox" value="${platform}" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" ${isChecked}>
            <label for="${platform}-checkbox" class="w-full ca py-3 ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">${platform}</label>
          </div>
        </li>
      `;
    })
    .join('');
};

// !! Toggle the visibility of platform checkboxes
const togglePlatform = () => {
  const togglePlatform = document.querySelector('.toggle_Platform');
  const listPlatform = document.querySelector('.list_Platform');

  togglePlatform.addEventListener('click', () => {
    listPlatform.classList.toggle('hidden');
    togglePlatform.classList.toggle('active');
    togglePlatform.innerHTML = `
      <span class="text-xl text-gray-900 dark:text-white">پلتفرم</span>
      <i class="fa-solid ${
        togglePlatform.classList.contains('active')
          ? 'fa-arrow-up'
          : 'fa-arrow-down'
      } fa-xl"></i>
      ${
        togglePlatform.classList.contains('active')
          ? ''
          : `<span class='absolute bottom-0 w-[90%] h-[2px] bg-gray-100'></span>`
      }
    `;
  });
};

// !! Render the platform checkboxes with a toggle button
const render = (data) => {
  parElement.innerHTML = `
    <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      <section class='flex cursor-pointer items-center p-3 relative justify-between toggle_Platform'>
        <span class="text-xl text-gray-900 dark:text-white">پلتفرم</span>
        <i class="fa fa-arrow-down fa-xl"></i>
        <span class='absolute bottom-0 w-[90%] h-[2px] bg-gray-100'></span>
      </section>
      <div class='list_Platform transition duration-75 ease-linear'>
        ${renderPlatformCheckBox(data)}
      </div>
    </ul>
  `;
};

//  !! Activate/deactivate checkboxes based on user selection
const handleCheckboxChange = (platform, checkbox) => {
  const queryParams = new URLSearchParams(window.location.search);

  queryParams.delete('platform');

  if (checkbox.checked) {
    queryParams.set('platform', platform);
  }
  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
  window.location.href = newUrl;
};

//  !! Attach event listeners to checkboxes
const handlerActiveCheckBox = (data) => {
  data.forEach((platform) => {
    const checkbox = document.getElementById(`${platform}-checkbox`);
    checkbox.addEventListener('change', () => {
      handleCheckboxChange(platform, checkbox);
    });
  });
};

export { render, handlerActiveCheckBox, togglePlatform };
