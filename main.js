import './style.css';
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as GameLandingController from './Controller/GameLanding';
import * as GameView from './View/Game';
import * as NotFoundView from './View/NotFound';
const Route = (currentPath = window.location.pathname) => {
  switch (currentPath) {
    case '/':
      HeaderMainView.render();
      GameLandingController.InitialDataToRender();
      break;
    case '/game':
      HeaderGameView.render();
      GameView.render();
      break;
    default:
      NotFoundView.render();
      break;
  }
};

Route();
