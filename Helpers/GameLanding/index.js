import RequestApi from '../Base';
const getAllGameLanding = async () => {
  try {
    const response = await RequestApi.get('/gameLanding');
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAllGameLanding };
