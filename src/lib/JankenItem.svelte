<script lang="ts">
  /* svelte */
  import { createEventDispatcher } from "svelte";

  /* app */
  import type { JankenType } from "../types";

  export let item: JankenType;
  export let isSelected: boolean = false;
  

  const dispatch = createEventDispatcher();

  const handleSelect = (type: JankenType) => {
    dispatch('kimeru', type);
  }

</script>


<button
  class="{isSelected ? 'selected' : ''}"
  on:click={() => handleSelect(item)}
>
  <img
    class="janken image"
    alt=""
    src={item.src}
  />
</button>

<style>
  button {
    display: block;
    border: none;
    outline: none;
    background: transparent !important;
  }

  .selected {
    outline: 0.25rem solid #ff3e00aa;
    border-radius: 10px;
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