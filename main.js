import './style.css';
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as PlatformController from './Controller/Platform';
import * as GameLandingController from './Controller/GameLanding';
import * as GenreController from './Controller/Genre';
import * as GameController from './Controller/Game';
import * as NotFoundView from './View/NotFound';
import * as ThemeView from './View/Theme';
import * as GameDetailController from './Controller/GameDetail';
const regexPattern = '\\/game\\/(\\d+)';
const regex = new RegExp(regexPattern);

const Route = async (currentPath = window.location.pathname) => {
  if (currentPath === '/') {
    HeaderMainView.render();
    ThemeView.changeTheme();
    await GameLandingController.InitialDataToRender();
    ThemeView.setInitialTheme();
  } else if (currentPath === '/game') {
    HeaderGameView.render();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    await Promise.all([
      GameController.InitialDataToRender(),
      GenreController.InitialDataToRender(),
      PlatformController.InitialDataToRender(),
    ]);
  } else if (location.pathname.match(regex) !== null) {
    HeaderGameView.render();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    GameDetailController.InitialDataToRender();
  } else {
    NotFoundView.render();
  }
};

Route();
