import * as GameView from '../../View/Home/Game';
import * as GameModel from '../../Model/Game';

import * as GameFavoriteModel from '../../Model/GameFavorite';
import * as GameFavoriteView from '../../View/Favorite';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    GameView.TitlePage();
    await GameModel.setInitialData();
    // await IntroGameSliderModel.setInitialData();
    GameFavoriteModel.setInitialData();
    GameView.render(Store.game, Store.gameFavorite);
    GameView.handlerAddGameFavorite(addGameFavorite, Store.game);
    GameView.handlerDeleteGameFavorite(deleteGameFavorite, Store.game);

    // IntroGameSlider.render(Store.gameIntoSlider);
    // IntroGameSlider.setOptions();
  } catch (err) {
    throw new Error(err);
  }
};

/**
 *
 * @param {object} game
 */
const deleteGameFavorite = (game) => {
  GameFavoriteModel.deleteGameFavorite(game);
  GameFavoriteView.deleteGameFavoriteMessage();
  GameView.render(Store.game, Store.gameFavorite);
};
/**
 *
 * @param {object} game
 */
const addGameFavorite = (game) => {
  GameFavoriteModel.addGameFavorite(game);
  GameFavoriteView.addGameFavoriteMessage();
  GameView.render(Store.game, Store.gameFavorite);
};

export { InitialDataToRender };
