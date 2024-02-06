import * as GameListView from '../../View/GameList';
import * as GameModel from '../../Model/Game';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GameModel.setInitialData();
    GameListView.render(Store.game);
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
