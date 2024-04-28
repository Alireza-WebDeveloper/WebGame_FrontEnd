import * as GameLandingView from '../../View/Landing';
import * as GameLandingModel from '../../Model/GameLanding';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    GameLandingView.TitlePage();
    await GameLandingModel.setInitialData();
    GameLandingView.render(Store.gameLanding);
    GameLandingView.AnimationGameLandingItem();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
