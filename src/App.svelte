<script lang="ts">
  import JankenController from "./lib/JankenController.svelte";
</script>

<main>
  <h1>じゃんけん</h1>
   <JankenController />
</main>

<style>
  main {
    background-color: pink;
    max-width: fit-content;
    justify-items: center;
    align-items: center;
  }
</style>