import * as FavoriteGameView from '../../View/FavoriteGame/index';
const initialDataToRender = async () => {
  try {
    FavoriteGameView.render();
  } catch (err) {
    throw new Error(err);
  }
};

const deleteFavoriteGame = () => {};

const addFavoriteGame = () => {};

export { initialDataToRender, addFavoriteGame, deleteFavoriteGame };
