const regexPattern = '\\/game\\/(\\d+)';
const GameRegex = new RegExp(regexPattern);

const regexPattern2 = '\\/topGames\\/(\\d+)';
const GameTopRegex = new RegExp(regexPattern2);

export { GameRegex, GameTopRegex };
