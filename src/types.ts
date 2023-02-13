

export type JankenType = {
  key: 0 | 1 | 2;
  value: 'gu' | 'choki' | 'pa',
  label: 'グー' | 'チョキ' | 'パー',
  src: string;
  weakKey: 0 | 1 | 2
}

export type Pon = Pick<JankenType, 'key' | 'value' | 'src'>;


export type ShohaiType = {
  key: 0 | 1 | 2;
  value: 'kachi' | 'aiko' | 'make',
  label: '勝ち' | 'あいこ' | '負け',
}

export type PonResult = ShohaiType;;


export type PlayerType = {
  key: 0 | 1,
  value: 'cpu' | 'you'
  label: 'コンピュータ' | 'あなた'
}
