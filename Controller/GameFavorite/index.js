import * as GameFavoriteView from '../../View/Favorite/index';
import * as GameFavoriteModel from '../../Model/GameFavorite/index';
import Store from '../../Model/index';
const initialDataToRender = async () => {
  try {
    GameFavoriteView.Title();
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
  GameFavoriteView.deleteGameFavoriteMessage();
  GameFavoriteView.render(Store.gameFavorite);
};

export { initialDataToRender, deleteGameFavorite };
