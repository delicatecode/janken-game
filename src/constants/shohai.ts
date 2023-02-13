import type { ShohaiType } from "../types"


const Kachi: ShohaiType = {
  key: 0,
  value: 'kachi',
  label: '勝ち'
}


const Aiko: ShohaiType = {
  key: 1,
  value: 'aiko',
  label: 'あいこ'
}


const Make: ShohaiType = {
  key: 2,
  value: 'make',
  label: '負け'
}


const Shohai = {
  'kachi': Kachi,
  'aiko': Aiko,
  'make': Make,
}




export {
  Shohai,
  Kachi,
  Aiko,
  Make
}
