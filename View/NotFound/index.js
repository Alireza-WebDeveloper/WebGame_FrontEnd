const app = document.querySelector('#app');

// !! Generate Main
const render = () => {
  return (app.innerHTML = `
  <div class='min-h-[100vh] grid place-items-center'> 
  
   <section class='flex flex-col space-y-7'>

   <h1 class='text-xl capitalize'>صفحه مورد نظر پیدا نشد</h1>

   <a href='/' class='px-4 text-center py-2 rounded bg-blue-700 dark:bg-blue-500'>برگشت به صفحه اصلی</a>

   </section>
  </div>`);
};

export { render };
