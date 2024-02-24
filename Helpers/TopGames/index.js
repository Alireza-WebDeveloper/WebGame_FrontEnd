import RequestApi from '../Base';

/**
 * 
 * @param {string} yearId 
 * @returns 
 */
const getTopGamesByYear = async (yearId) => {
  try {
    const response = await RequestApi.get(`/topGames/${yearId}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { getTopGamesByYear };
