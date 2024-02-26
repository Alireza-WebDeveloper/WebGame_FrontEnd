// !! Styles
import './style.css';

// !! Controllers
import * as PlatformController from './Controller/Platform';
import * as GameLandingController from './Controller/GameLanding';
import * as GenreController from './Controller/Genre';
import * as GameController from './Controller/Game';
import * as GameDetailController from './Controller/GameDetail';
import * as GameFavoriteController from './Controller/GameFavorite';
import * as TopGamesController from './Controller/TopGames';
// !! View
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as NotFoundView from './View/NotFound';
import * as ThemeView from './View/Theme';
import * as CategoryTopGamesView from './View/CategoryTopGames';
import * as FooterView from './View/Footer';
// !! RegExp
const regexPattern = '\\/game\\/(\\d+)';
const regex = new RegExp(regexPattern);

const regexPattern2 = '\\/topGames\\/(\\d+)';
const regex2 = new RegExp(regexPattern2);

// !! Dom
const gameSidebar = document.querySelector('#gameSidebar');

// !! Route
const Route = async (currentPath = window.location.pathname) => {
  if (currentPath === '/') {
    HeaderMainView.render();
    HeaderMainView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    HeaderMainView.handlerScrollDown();
    FooterView.render();
    await GameLandingController.InitialDataToRender();
  } else if (currentPath === '/game') {
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    CategoryTopGamesView.render();
    FooterView.render();
    await Promise.all([
      GameController.InitialDataToRender(),
      GenreController.InitialDataToRender(),
      PlatformController.InitialDataToRender(),
    ]);
    gameSidebar.classList.add('h-[100vh]');
  } else if (location.pathname.match(regex) !== null) {
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    FooterView.render();
    await GameDetailController.InitialDataToRender();
  } else if (currentPath === '/favorite') {
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    FooterView.render();
    GameFavoriteController.initialDataToRender();
  } else if (location.pathname.match(regex2) !== null) {
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    FooterView.render();
    TopGamesController.InitialDataToRender();
  } else {
    NotFoundView.render();
  }
};

Route();
