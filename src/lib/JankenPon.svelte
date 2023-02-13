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
  <JankenList on:kimeru={(e) => handleKimeru(e.detail)} />
  <div
    class="pon__btn"
  >
    <button 
      disabled={!pon}
      on:click={handlePon}
    >
      ぽん！
    </button>
  </div>
</div>

<style>
  .pon {
    display: flex;
  }

  .pon__btn {
    margin-left: 1rem;
    margin-top: 50px;
  }
</style>