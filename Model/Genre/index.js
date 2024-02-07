import { getAllGenre } from '../../Helpers/Genre';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async () => {
  try {
    const data = await getAllGenre();
    Store.genre = data.data.genre;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
