import * as PlatformView from '../../View/Platform';
import * as PlatformModel from '../../Model/Platform';
import Store from '../../Model/index';
const InitialDataToRender = async () => {
  try {
    await PlatformModel.setInitialData();
    PlatformView.render(Store.platform);
    PlatformView.handlerActiveCheckBox(Store.platform);
    PlatformView.togglePlatform();
  } catch (err) {
    throw new Error(err);
  }
};

export { InitialDataToRender };
