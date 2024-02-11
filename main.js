import './style.css';
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as PlatformController from './Controller/Platform';
import * as GameLandingController from './Controller/GameLanding';
import * as GenreController from './Controller/Genre';
import * as GameController from './Controller/Game';
import * as NotFoundView from './View/NotFound';
import * as ThemeView from './View/Theme';
const Route = async (currentPath = window.location.pathname) => {
  switch (currentPath) {
    case '/':
      HeaderMainView.render();
      ThemeView.changeTheme();
      await GameLandingController.InitialDataToRender();
      ThemeView.setInitialTheme();
      break;
    case '/game':
      HeaderGameView.render();
      ThemeView.changeTheme();
      ThemeView.setInitialTheme();
      await Promise.all([
        GameController.InitialDataToRender(),
        GenreController.InitialDataToRender(),
        PlatformController.InitialDataToRender(),
      ]);
      break;
    default:
      NotFoundView.render();
      break;
  }
};

Route();
