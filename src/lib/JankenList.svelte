<script lang="ts">
  /* svelte */
  import { createEventDispatcher } from "svelte";

  /* app */
  import { Gu, Choki, Pa } from "../constants/janken";
  import type { JankenType } from "../types";

  let selects = [
    Gu,
    Choki,
    Pa
  ];

  const dispatch = createEventDispatcher();


  const handleSelect = (type: JankenType) => {
    dispatch('kimeru', type);
  }

</script>


{#each selects as janken}
  <button
    on:click={() => handleSelect(janken)}
  >
    <img
      class="janken image"
      alt=""
      src={janken.src}
    />
  </button>
{/each}

<style>
  button {
    border: none;
    outline: none;
    background: transparent !important;
  }
  .janken {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .janken:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .janken.image:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>