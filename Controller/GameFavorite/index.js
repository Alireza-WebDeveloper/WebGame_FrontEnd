import * as GameFavoriteView from '../../View/GameFavorite/index';
import * as GameFavoriteModel from '../../Model/GameFavorite/index';
import Store from '../../Model/index';
const initialDataToRender = async () => {
  try {
    GameFavoriteModel.setInitialData();
    GameFavoriteView.render(Store.gameFavorite);
    GameFavoriteView.handlerDeleteGameFavorite(
      deleteGameFavorite,
      Store.gameFavorite
    );
  } catch (err) {
    throw new Error(err);
  }
};

const deleteGameFavorite = (game) => {
  GameFavoriteModel.deleteGameFavorite(game);
  GameFavoriteView.render(Store.gameFavorite);
};

export { initialDataToRender, deleteGameFavorite };
