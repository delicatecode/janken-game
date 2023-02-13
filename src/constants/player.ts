import type { PlayerType } from "../types";


const Computer: PlayerType = {
  key: 0,
  value: 'cpu',
  label: 'コンピュータ'
}


const You: PlayerType = {
  key: 1,
  value: 'you',
  label: 'あなた'
}


const Players = {
  'cpu': Computer,
  'you': You
}


export {
  Players,
  Computer,
  You
}
