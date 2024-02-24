import Store from '../../Model/index';
import * as LocalStorage from '../../Modules/LocalStorage';
// Set Initial Data (GameLanding)
const setInitialData = () => {
  try {
    // 1 ) Get Data Of LocalStorage
    const data = LocalStorage.get('gameFavorite', []);
    Store.gameFavorite = data;
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 *
 * @param {object} game
 */
const deleteGameFavorite = (game) => {
  let newFavoriteGame = Store.gameFavorite.filter(
    (gameFind) => gameFind._id !== game._id
  );
  Store.gameFavorite = newFavoriteGame;
  LocalStorage.set('gameFavorite', newFavoriteGame);
};

/**
 *
 * @param {object} game
 */
const addGameFavorite = (game) => {
  Store.gameFavorite = [...Store.gameFavorite, game];
  console.log(Store);
  LocalStorage.set('gameFavorite', Store.gameFavorite);
};

export { setInitialData, addGameFavorite, deleteGameFavorite };
