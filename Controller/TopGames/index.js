import * as TopGamesModel from '../../Model/TopGames';
import * as TopGamesView from '../../View/GameTop';
import Store from '../../Model/index';

const InitialDataToRender = async () => {
  try {
    const year = getYearFromURL();
    await TopGamesModel.setInitialData(year);
    TopGamesView.render(Store.topGames);
  } catch (err) {
    throw new Error(err);
  }
};

const getYearFromURL = () => {
  const pathParts = window.location.pathname.split('/');
  const yearIndex = pathParts.findIndex((part) => part.match(/^\d{4}$/));
  return yearIndex !== -1 ? pathParts[yearIndex] : '2024';
};

export { InitialDataToRender };
