import * as GameLandingView from '../../View/GameLanding';
import * as GameLandingModel from '../../Model/GameLanding';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GameLandingModel.setInitialData();
    GameLandingView.render(Store.gameLanding);
    GameLandingView.AnimationGameLandingItem();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
