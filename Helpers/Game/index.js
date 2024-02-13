import RequestApi from '../Base';

const getAllGameList = async () => {
  try {
    // 1 ) GET URL SITE
    const currentUrl = new URL(window.location.href);
    // 2 ) Read Query Of Url
    const platform = currentUrl.searchParams.get('platform');
    const genre = currentUrl.searchParams.get('genre');

    const queryParams = new URLSearchParams();
    if (platform) queryParams.append('platform', platform);
    if (genre) queryParams.append('genre', genre);
    // 3 ) Condition
    const url =
      '/game' + (queryParams.toString() ? '?' + queryParams.toString() : '');
    // 4 ) Request
    const response = await RequestApi.get(url);
    // 5 ) Response
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAllGameList };
