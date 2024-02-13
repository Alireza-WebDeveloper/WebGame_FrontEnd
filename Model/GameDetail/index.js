import { getGameById } from '../../Helpers/GameDetail';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async (id) => {
  try {
    const data = await getGameById(id);
    Store.gameDetail = data.data.game;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
