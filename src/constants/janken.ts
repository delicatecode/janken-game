import type { JankenType } from "../types";


const Gu: JankenType = {
  key: 0,
  value: 'gu',
  label: 'グー',
  src: '/assets/janken-plate_gu.png',
  weakKey: 2,
}


const Choki: JankenType = {
  key: 1,
  value: 'choki',
  label: 'チョキ',
  src: '/assets/janken-plate_choki.png',
  weakKey: 0,
}


const Pa: JankenType = {
  key: 2,
  value: 'pa',
  label: 'パー',
  src: '/assets/janken-plate_pa.png',
  weakKey: 1,
}


const Janken = {
  'gu': Gu,
  'choki': Choki,
  'pa': Pa
}


export {
  Janken,
  Gu,
  Choki,
  Pa
}
