<script lang="ts">
   import type { Pon, PlayerType } from "../types";

   export let player: PlayerType;
   export let pon: Pon;
</script>


<div class="card">
  <h1>{player.label}</h1>

  {#if pon && pon.value}
    <img src={pon.src} alt={''} />
  {/if}
</div>

<style>
  .card {
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
    min-width: 200px;
    min-height: 350px;
    color: #fff;
    background: #FFF;
    border: solid 3px;
    border-radius: 10px;/*角の丸み*/
  }

  .card h1 {
    color: pink
  }

  .card img {
    max-width: 150px;
    max-height: 285px;
  }
</style>