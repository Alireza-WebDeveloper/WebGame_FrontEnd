import * as IntroGameSliderModel from '../../Model/GameIntroSlider';
import * as IntroGameSliderView from '../../View/Home/IntroGameSlider';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await IntroGameSliderModel.setInitialData();
    IntroGameSliderView.render(Store.gameIntoSlider);
    IntroGameSliderView.setOptions();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
