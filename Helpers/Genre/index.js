import RequestApi from '../Base';
const getAllGenre = async () => {
  try {
    const response = await RequestApi.get('/genre');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAllGenre };
