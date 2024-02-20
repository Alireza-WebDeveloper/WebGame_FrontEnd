import * as GameView from '../../View/Game';
import * as GameModel from '../../Model/Game';
import * as IntroGameSlider from '../../View/IntroGameSlider';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GameModel.setInitialData();
    GameView.render(Store.game);
    IntroGameSlider.render(Store.game.slice(4, 15));
    IntroGameSlider.setOptions();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
