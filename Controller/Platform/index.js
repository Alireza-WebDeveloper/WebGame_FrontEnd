import * as PlatformView from '../../View/Platform';
import * as PlatformModel from '../../Model/Platform';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await PlatformModel.setInitialData();
    console.log(Store);
    PlatformView.render(Store.platform);
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
