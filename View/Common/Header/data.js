/**
 * @typedef {Object} Route
 * @property {string} text - The text for the route.
 * @property {string} href - The href for the route.
 */

/**
 * An array of route objects.
 * @type {Route[]}
 */
const routes = [
  {
    text: 'صفحه اصلی',
    href: '/',
  },
  {
    text: 'بازی ها',
    href: '/game',
  },
  {
    text: 'درباره ما',
    href: '/about',
  },
  {
    text: 'علاقه مندی من',
    href: '/favorite',
  },
];

const render = () => {
  return routes
    .map(({ text, href }) => {
      return `<a href="${href}" class="lg:text-2xl text-lg">${text}</a>`;
    })
    .join('');
};

export { render };
