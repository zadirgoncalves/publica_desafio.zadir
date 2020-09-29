export interface Game  {
  jogo: number;
  placar: number;
  minimo: number;
  maximo: number;
  quebra_minimo: number;
  quebra_maximo: number;
}

export interface GameState {
  games: Game[];
}

export const ADD_GAME = 'ADD_GAME';
export const DELETE_GAME = 'DELETE_GAME';

interface AddGameAction {
  type: typeof ADD_GAME;
  payload: Game;
}

interface DeleteGameAction {
  type: typeof DELETE_GAME;
  selected: number[];
}

export type GameActionTypes = AddGameAction | DeleteGameAction;