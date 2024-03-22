const gameDetailsMetaTags = [
  { name: 'description', content: 'معرفی جزئیات بازی' },
  { name: 'author', content: 'Alireza Khodadadi' },
  { property: 'og:title', content: 'جزئیات بازی' },
  { property: 'og:description', content: 'معرفی جزئیات بازی' },
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

const renderGameDetailsMetaTags = () => {
  const fragment = document.createDocumentFragment();
  gameDetailsMetaTags.forEach((tagInfo) => {
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

export { renderGameDetailsMetaTags };
