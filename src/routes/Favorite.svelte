<script>
  import Header from "../UI/Header.svelte";
  import { slide, fade } from "svelte/transition";
  import { favoriteY } from "../params.js";
  import { onDestroy, onMount } from "svelte";
  import MusicItems from "../UI/MusicItems.svelte";
  let favoriteSongs = [];
  let change = false;

  $: if (change || !change) {
    favoriteSongs = localStorage.getItem("favorites");
  }
  console.log(favoriteSongs);
</script>

<style type="text/scss">
  .title {
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
    span {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      color: black;
      font-size: 32px;
    }
  }
</style>

<!-- <svelte:window bind:scrollY={y} /> -->

<Header />

<main transition:fade={{ duration: 100 }}>
  <div class="title">
    <span>Favorite</span>

  </div>
  <MusicItems
    songs={JSON.parse(favoriteSongs)}
    sort={false}
    on:change={() => (change = !change)} />

</main>
