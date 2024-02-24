// !! Styles
import './style.css';

// !! Controllers
import * as PlatformController from './Controller/Platform';
import * as GameLandingController from './Controller/GameLanding';
import * as GenreController from './Controller/Genre';
import * as GameController from './Controller/Game';
import * as GameDetailController from './Controller/GameDetail';
import * as GameFavoriteController from './Controller/GameFavorite';
// !! View
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as NotFoundView from './View/NotFound';
import * as ThemeView from './View/Theme';
import * as CategoryTopGamesView from './View/CategoryTopGames';
// !! RegExp
const regexPattern = '\\/game\\/(\\d+)';
const regex = new RegExp(regexPattern);

// !! Route
const Route = async (currentPath = window.location.pathname) => {
  if (currentPath === '/') {
    HeaderMainView.render();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    HeaderMainView.handlerScrollDown();
    await GameLandingController.InitialDataToRender();
  } else if (currentPath === '/game') {
    HeaderGameView.render();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    CategoryTopGamesView.render();
    await Promise.all([
      GameController.InitialDataToRender(),
      GenreController.InitialDataToRender(),
      PlatformController.InitialDataToRender(),
    ]);
  } else if (location.pathname.match(regex) !== null) {
    HeaderGameView.render();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    await GameDetailController.InitialDataToRender();
  } else if (currentPath === '/favorite') {
    HeaderGameView.render();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    GameFavoriteController.initialDataToRender();
  } else {
    NotFoundView.render();
  }
};

Route();
