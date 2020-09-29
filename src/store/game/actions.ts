import { Game, ADD_GAME, DELETE_GAME, GameActionTypes } from './types';

export function addGame(game: Game):GameActionTypes {
  return {
    type: ADD_GAME,
    payload: game
  };
}

export function deleteGame(selected: number[]):GameActionTypes {
  return {
    type: DELETE_GAME,
    selected:  selected
  };
}