import * as GameDetailView from '../../View/GameDetail';
import * as GameDetailModel from '../../Model/GameDetail';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    const currentPath = window.location.pathname;
    const gameIdPattern = /\/game\/(\w+)/;
    const match = currentPath.match(gameIdPattern);
    const gameId = match ? match[1] : null;
    await GameDetailModel.setInitialData(gameId);
    GameDetailView.render(Store.gameDetail);
    GameDetailView.optionVideo();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
