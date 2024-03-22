const getYearFromURL = () => {
  const pathParts = window.location.pathname.split('/');
  const yearIndex = pathParts.findIndex((part) => part.match(/^\d{4}$/));
  return yearIndex !== -1 ? pathParts[yearIndex] : '2024';
};

const topGamesMetaTags = () => {
  return [
    { name: 'description', content: `بازی‌های برتر سال ${getYearFromURL()}` },
    { name: 'author', content: 'Alireza Khodadadi' },
    { property: 'og:title', content: `بازی‌های برتر سال ${getYearFromURL()}` },
    {
      property: 'og:description',
      content: `بازی‌های برتر سال ${getYearFromURL()}`,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://web-game-front-end.vercel.app/' },
    {
      property: 'og:image',
      content:
        'https://wenbstorage.storage.iran.liara.space/webgame/image/banner/1.jpg',
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@webgame' },
  ];
};

const renderTopGamesMetaTags = () => {
  const metaTags = topGamesMetaTags();
  const fragment = document.createDocumentFragment();
  metaTags.forEach((tagInfo) => {
    const metaTag = document.createElement('meta');
    Object.entries(tagInfo).forEach(([key, value]) =>
      metaTag.setAttribute(key, value)
    );
    fragment.appendChild(metaTag);
  });
  const head = document.head;
  const firstChild = head.firstElementChild;
  head.insertBefore(fragment, firstChild);
};

export { renderTopGamesMetaTags };
