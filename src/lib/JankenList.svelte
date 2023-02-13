<script lang="ts">
  /* svelte */
  import { createEventDispatcher } from "svelte";

  /* app */
  import { Gu, Choki, Pa } from "../constants/janken";
  import type { JankenType } from "../types";
    import JankenItem from "./JankenItem.svelte";

  let selects = [
    Gu,
    Choki,
    Pa
  ];
  let current: JankenType;

  const dispatch = createEventDispatcher();


  const handleSelect = (type: JankenType) => {
    current = type;
    dispatch('kimeru', type);
  }

</script>


<div class="flex">
  {#each selects as janken}
    <JankenItem
      item={janken}
      isSelected={current && current.value === janken.value}
      on:kimeru={e => handleSelect(e.detail)}
    />
  {/each}
</div>

<style>
  .flex {
    display: flex;
  }
</style>