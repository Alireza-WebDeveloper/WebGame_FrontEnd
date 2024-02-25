const parElement = document.querySelector('footer');

// !! Generate Main
const render = () => {
  parElement.innerHTML = `
  <section
  class="relative animate-pulse duration-150 before:absolute before:-right-5 before:top-2 before:w-4 before:h-4 before:bg-purple-700 before:rounded-full"
>
  <p class="font-semibold text-lg">
    به یک جهان از ماجراجویی و هیجان خوش آمدید، جایی که خیال واقعیت
    می‌شود و خواب‌ها به واقعیت پیوسته می‌شوند
  </p>
</section>
  `;
};

export { render };
