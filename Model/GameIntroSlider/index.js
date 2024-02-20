import { getRandomGames } from '../../Helpers/GameIntroSlider';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async () => {
  try {
    const data = await getRandomGames();
    Store.gameIntoSlider = data.data.randomGames;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
