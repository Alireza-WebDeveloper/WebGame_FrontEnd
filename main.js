import './style.css';
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as GameLandingController from './Controller/GameLanding';
import * as GameController from './Controller/Game';
import * as NotFoundView from './View/NotFound';
import * as PlatformView from './View/Platform';
const Route = (currentPath = window.location.pathname) => {
  switch (currentPath) {
    case '/':
      HeaderMainView.render();
      GameLandingController.InitialDataToRender();
      break;
    case '/game':
      HeaderGameView.render();
      GameController.InitialDataToRender();
      PlatformView.render();
      break;
    default:
      NotFoundView.render();
      break;
  }
};

Route();
