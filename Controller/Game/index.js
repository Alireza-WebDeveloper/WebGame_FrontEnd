import * as GameView from '../../View/Game';
import * as GameModel from '../../Model/Game';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GameModel.setInitialData();
    GameView.render(Store.game);
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };