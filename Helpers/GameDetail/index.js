import RequestApi from '../Base';
const getGameById = async (id) => {
  try {
    const response = await RequestApi.get(`/game/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getGameById };
