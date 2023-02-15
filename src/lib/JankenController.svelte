<script lang="ts">
  /* svelte */
  /* app */
  import JankenPon from "./JankenPon.svelte";
  import JankenPlayers from "./JankenPlayers.svelte";
  import { Choki, Gu, Janken, Pa } from "../constants/janken";
  import type { Pon, PonResult } from "../types";
  import { Shohai } from "../constants/shohai";


  let Jankens = [
    Gu,
    Choki,
    Pa,
  ]

  let cpuPon: Pon;
  let youPon: Pon;

  let shohai: PonResult;


  const handlePon = (pon: Pon) => {
    youPon = pon;
    cpuPon = Jankens[Math.floor(Math.random() * Jankens.length)];

    if (Janken[youPon.value].weakKey === cpuPon.key) {
      shohai = Shohai['make'];
    } else {
      if (youPon.key === cpuPon.key) {
        shohai = Shohai['aiko'];
      } else {
        shohai = Shohai['kachi']
      }
    }
  }


</script>


<section>
  <JankenPon on:pon={e => handlePon(e.detail)} />
</section>
<section
  class="result__section"
>
  <div class="result">
    {#if shohai && shohai.value}
      <h2>{shohai.label}</h2>
    {/if}
  </div>
</section>
<section class="players">
  <JankenPlayers cpuPon={cpuPon} youPon={youPon} />
</section>


<style>
  .result {
    /* margin-top: -200px;
    margin-left: 13%; */
    position: static;
    width: 500px;
    justify-items: center;
    margin: 0 45%;
  }
  .players {
    position: static;
    margin: 70px auto;
  }
</style>