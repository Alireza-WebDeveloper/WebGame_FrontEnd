import { getAllGameLanding } from '../../Helpers/GameLanding';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async () => {
  try {
    const data = await getAllGameLanding();
    Store.gameLanding = data.data.gameLanding;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
