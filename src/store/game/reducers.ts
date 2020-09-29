import { Game, GameState, GameActionTypes, ADD_GAME, DELETE_GAME } from './types';

const initialState: GameState = {
  games: []
}

function isMax(games: Game[], placar:number): boolean {
  var max:number = 0;

  if (!games.length) return false;

  games.forEach(game => {
      if (game.maximo > max) {
        max = game.maximo;
      }
  });
  return placar > max;
}

function isMin(games: Game[], placar:number): boolean {
  var min:number = 50000;

  if (!games.length) return false;

  games.forEach(game => {
      if (game.minimo < min) {
        min = game.minimo;
      }
  });
  return placar < min;
}

function getMax(games: Game[], placar:number): number {
  var max:number = 0;
  games.forEach(game => {
      if (game.maximo > max) {
        max = game.maximo;
      }
  });
  return placar > max ? placar: max;
}

function getMin(games: Game[], placar:number): number {
  var min:number = 50000;
  games.forEach(game => {
      if (game.minimo < min) {
        min = game.minimo;
      }
  });
  return placar < min ? placar : min;
}

function getNextID(games: Game[]): number {
  return games.length + 1;
}

export function gameReducer (
  state = initialState,
  action: GameActionTypes
): GameState   {
  switch (action.type) {
    case ADD_GAME:

      const games: Game[] = state.games;
      const selectedGame:Game = action.payload;
      const newGame:Game = {
        jogo: getNextID(games),
        placar: selectedGame.placar,
        quebra_maximo: isMax(games, selectedGame.placar) ? 1 : 0,
        quebra_minimo: isMin(games, selectedGame.placar) ? 1 : 0,
        maximo: getMax(games, selectedGame.placar),
        minimo: getMin(games, selectedGame.placar)
      }
      return {
        games: [...games, newGame]
      } 
    case DELETE_GAME:
      return {
        games: state.games.filter((game) => action.selected.indexOf(game.jogo) === -1)
      }
    default: return state;  
  }
}