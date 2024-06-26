import * as GenreView from '../../View/Home/Genre';
import * as GenreModel from '../../Model/Genre';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await GenreModel.setInitialData();
    GenreView.render(Store.genre);
    GenreView.handlerActiveCheckBox(Store.genre);
    GenreView.toggleGenre();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
