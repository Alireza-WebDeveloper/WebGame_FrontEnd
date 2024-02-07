import RequestApi from '../Base';
const getAllPlatform = async () => {
  try {
    const response = await RequestApi.get('/platform');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAllPlatform };
