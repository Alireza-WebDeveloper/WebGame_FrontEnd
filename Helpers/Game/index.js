import RequestApi from '../Base';
const getAllGameList = async () => {
  try {
    const response = await RequestApi.get('/game');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAllGameList };
