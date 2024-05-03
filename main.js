// !! Styles
import 'sass';
import './style.scss';

// !! Controllers
import Controller from './Controller';

// !! View
import * as HeaderMainView from './View/Common/Header/main';
import * as HeaderGameView from './View/Common/Header/game';
import * as NotFoundView from './View/NotFound';
import * as ThemeView from './View/Common/Theme';
import * as CategoryTopGamesView from './View/Home/CategoryTopGames';
import * as FooterView from './View/Common/Footer';
import * as GameSearchView from './View/Home/GameSearch';

// !! RegExp
import { GameRegex, GameTopRegex } from './Regex';

// !! Elements
const gameSidebar = document.querySelector('#gameSidebar');

// !! Seo
import * as GameLandingSeo from './Seo/GameLanding';
import * as GameSeo from './Seo/Game';
import * as GameDetailSeo from './Seo/GameDetail';
import * as GameFavorite from './Seo/GameFavorite';
import * as TopGamesSeo from './Seo/TopGames';
import * as NotFoundSeo from './Seo/NotFound';

const RenderUi = () => {
  ThemeView.changeTheme();
  ThemeView.setInitialTheme();
  FooterView.render();
};

// !! Route
const Route = async (currentPath = window.location.pathname) => {
  if (currentPath === '/') {
    GameLandingSeo.renderMetaTags();
    HeaderMainView.render();
    HeaderMainView.handlerDropdownTopGamesMenu();
    RenderUi();
    HeaderMainView.handlerScrollDown();
    await Controller.GameLanding.InitialDataToRender();
  } else if (currentPath === '/game') {
    GameSeo.renderMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    RenderUi();
    CategoryTopGamesView.render();
    await Promise.all([
      Controller.Game.InitialDataToRender(),
      Controller.Genre.InitialDataToRender(),
      Controller.Platform.InitialDataToRender(),
      Controller.IntroGameSlider.InitialDataToRender(),
    ]);
    GameSearchView.render();
    GameSearchView.initialValue();
    GameSearchView.handlerGameSearch();
    gameSidebar.classList.add('h-[100vh]');
  } else if (location.pathname.match(GameRegex) !== null) {
    GameDetailSeo.renderGameDetailsMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    RenderUi();
    await Controller.GameDetail.InitialDataToRender();
  } else if (currentPath === '/favorite') {
    GameFavorite.renderFavoritesMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    RenderUi();
    await Controller.GameFavorite.initialDataToRender();
  } else if (location.pathname.match(GameTopRegex) !== null) {
    TopGamesSeo.renderTopGamesMetaTags();
    HeaderGameView.render();
    HeaderGameView.handlerDropdownTopGamesMenu();
    RenderUi();
    await Controller.TopGames.InitialDataToRender();
  } else {
    NotFoundSeo.renderNotFoundMetaTags();
    NotFoundView.render();
  }
};

Route();
