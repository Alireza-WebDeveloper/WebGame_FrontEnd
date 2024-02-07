import { getAllPlatform } from '../../Helpers/Platform';
import Store from '../../Model/index';

// Set Initial Data (GameLanding)
const setInitialData = async () => {
  try {
    const data = await getAllPlatform();
    Store.platform = data.data.platform;
  } catch (err) {
    throw new Error(err);
  }
};

export { setInitialData };
