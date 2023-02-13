<script lang="ts">
  import { You, Computer } from "../constants/player"
  import type { Pon } from "../types";
  import JankenPlayer from "./JankenPlayer.svelte";


  export let cpuPon: Pon;
  export let youPon: Pon;
 

</script>
<div class="card__list">
  <JankenPlayer player={Computer} pon={cpuPon} />
  <JankenPlayer player={You} pon={youPon} />
</div>

<style>
  .card__list {
    display: flex;
  }
</style>