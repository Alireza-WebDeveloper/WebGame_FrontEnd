import * as GameView from '../../View/Game';
import * as GameModel from '../../Model/Game';
import * as IntroGameSlider from '../../View/IntroGameSlider';
import * as IntroGameSliderModel from '../../Model/GameIntroSlider';
import * as GameFavoriteModel from '../../Model/GameFavorite';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GameModel.setInitialData();
    await IntroGameSliderModel.setInitialData();
    GameFavoriteModel.setInitialData();
    GameView.render(Store.game, Store.gameFavorite);
    GameView.handlerAddGameFavorite(addGameFavorite, Store.game);
    GameView.handlerDeleteGameFavorite(deleteGameFavorite, Store.game);
    IntroGameSlider.render(Store.gameIntoSlider);
    IntroGameSlider.setOptions();
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
  GameView.render(Store.game, Store.gameFavorite);
};
/**
 *
 * @param {object} game
 */
const addGameFavorite = (game) => {
  GameFavoriteModel.addGameFavorite(game);
  GameView.render(Store.game, Store.gameFavorite);
};

export { InitialDataToRender };
