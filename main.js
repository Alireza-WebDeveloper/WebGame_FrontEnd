import './style.css';
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as PlatformController from './Controller/Platform';
import * as GameLandingController from './Controller/GameLanding';
import * as GenreController from './Controller/Genre';
import * as GameController from './Controller/Game';
import * as NotFoundView from './View/NotFound';
const Route = async (currentPath = window.location.pathname) => {
  switch (currentPath) {
    case '/':
      HeaderMainView.render();
      await GameLandingController.InitialDataToRender();
      break;
    case '/game':
      HeaderGameView.render();
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
