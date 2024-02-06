import { getAllGameList } from '../../Helpers/Game';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async () => {
  try {
    const data = await getAllGameList();
    Store.game = data.data.game;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
