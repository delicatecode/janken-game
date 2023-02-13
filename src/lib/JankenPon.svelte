<script lang="ts">
  /* svelte */
  import { createEventDispatcher } from "svelte";

  /* app */
  import type { JankenType } from "../types";
  import JankenList from "./JankenList.svelte";


  let pon: JankenType;

  const displach = createEventDispatcher();


  const handleKimeru = (type: JankenType) => {
    pon = type;
  }

  const handlePon = () => {
    displach('pon', pon);
  }

</script>


<div class="pon">
  <div>
    <JankenList on:kimeru={(e) => handleKimeru(e.detail)} />
  </div>
  <div
    class="pon__btn"
  >
    <button 
      disabled={!pon}
      on:click={handlePon}
    >
      ぽん！
    </button>
    {#if pon && pon.label}
      <p>{pon.label}</p> 
    {/if}
  </div>
</div>

<style>
  .pon {
    display: flex;
  }

  .pon__btn {
    margin-top: 50px;
  }
</style>