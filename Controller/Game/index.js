import * as GameView from '../../View/Game';
import * as GameModel from '../../Model/Game';
import * as IntroGameSlider from '../../View/IntroGameSlider';
import * as IntroGameSliderModel from '../../Model/GameIntroSlider';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GameModel.setInitialData();
    await IntroGameSliderModel.setInitialData();
    GameView.render(Store.game);
    IntroGameSlider.render(Store.gameIntoSlider);
    IntroGameSlider.setOptions();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
