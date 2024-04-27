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
import * as IntroGameSliderController from './Controller/IntroGameSlider';
// !! View
import * as HeaderMainView from './View/Header/main';
import * as HeaderGameView from './View/Header/game';
import * as NotFoundView from './View/NotFound';
import * as ThemeView from './View/Theme';
import * as CategoryTopGamesView from './View/CategoryTopGames';
import * as FooterView from './View/Footer';
import * as GameSearchView from './View/GameSearch';
// !! RegExp
const regexPattern = '\\/game\\/(\\d+)';
const regex = new RegExp(regexPattern);

const regexPattern2 = '\\/topGames\\/(\\d+)';
const regex2 = new RegExp(regexPattern2);

// !! Dom
const gameSidebar = document.querySelector('#gameSidebar');

// !! Seo
import * as GameLandingSeo from './Seo/GameLanding';
import * as GameSeo from './Seo/Game';
import * as GameDetailSeo from './Seo/GameDetail';
import * as GameFavorite from './Seo/GameFavorite';
import * as TopGamesSeo from './Seo/TopGames';
import * as NotFoundSeo from './Seo/NotFound';

// !! Route
const Route = async (currentPath = window.location.pathname) => {
  if (currentPath === '/') {
    GameLandingSeo.renderMetaTags();
    HeaderMainView.render();
    HeaderMainView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    HeaderMainView.handlerScrollDown();
    FooterView.render();
    await GameLandingController.InitialDataToRender();
  } else if (currentPath === '/game') {
    GameSeo.renderMetaTags();
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
      IntroGameSliderController.InitialDataToRender(),
    ]);
    GameSearchView.render();
    GameSearchView.initialValue();
    GameSearchView.handlerGameSearch();
    gameSidebar.classList.add('h-[100vh]');
  } else if (location.pathname.match(regex) !== null) {
    GameDetailSeo.renderGameDetailsMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    FooterView.render();
    await GameDetailController.InitialDataToRender();
  } else if (currentPath === '/favorite') {
    GameFavorite.renderFavoritesMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    FooterView.render();
    GameFavoriteController.initialDataToRender();
  } else if (location.pathname.match(regex2) !== null) {
    TopGamesSeo.renderTopGamesMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    ThemeView.changeTheme();
    ThemeView.setInitialTheme();
    FooterView.render();
    TopGamesController.InitialDataToRender();
  } else {
    NotFoundSeo.renderNotFoundMetaTags();
    NotFoundView.render();
  }
};

Route();
