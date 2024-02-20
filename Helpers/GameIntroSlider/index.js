import RequestApi from '../Base';
const getRandomGames = async () => {
  try {
    const response = await RequestApi.get('/randomGame');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getRandomGames };
