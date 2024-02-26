import { getTopGamesByYear } from '../../Helpers/TopGames';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async (yearId) => {
  try {
    const data = await getTopGamesByYear(yearId);

    Store.topGames = data.data;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
