<script>
  import Header from "../UI/Header.svelte";

  import Footer from "../UI/Footer.svelte";
  import SearchInput from "../UI/SearchInput.svelte";
  import GenreButtons from "../UI/GenreButtons.svelte";
  import FavSongList from "../UI/FavSongList.svelte";

  import MusicItems from "../UI/MusicItems.svelte";

  import { slide, fade } from "svelte/transition";
  import { homeY, validSelectedItems, limit } from "../params.js";
  import { onDestroy, onMount, beforeUpdate, afterUpdate } from "svelte";
  import axios from "axios";
  import _ from "lodash";
  import { getContext } from "svelte";

  let inputValue = "",
    selectedItems,
    history,
    genreMusic,
    genreMusics,
    searchedMusics;
  $: history = JSON.parse(localStorage.getItem("history")); // history in localstorage
  $: genreMusics = genreMusic
    ? genreMusic.reduce((a, b) => [...a, ...b], [])
    : [];
  $: {
    if (inputValue) {
      // remove all of lyrics items shown  at writing in input form
      genreMusic = [];
      genreMusics = [];
      selectedItems = [];
      validSelectedItems.set([]);
    } else {
      // if input form is empty => remove the searched items
      searchedMusics = [];
    }
  }
  async function search() {
    //search function for search input
    searchedMusics = (await axios.get(
      `http://127.0.0.1:8000/api/search?query=${inputValue}&limit=${$limit}`
    )).data.data;
  }
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500|Ubuntu:400,500&display=swap");
  @import url("//db.onlinewebfonts.com/c/1064f0ad1cb65fdab43bb592ddd8aa91?family=Gilroy-Bold");
  *::after,
  *,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  main {
    overflow-x: hidden;
    height: 1000px;
    width: 100%;
    margin: 0 auto;
    .welcome {
      width: 90%;
      margin: auto;
      margin-top: 4rem;
      span:nth-child(1) {
        color: black;
        font-family: "Gilroy-Bold", sans-serif;
        font-size: 2.4rem;
        font-weight: bold;
      }
      span:nth-child(2) {
        color: black;
        font-family: "Gilroy-Bold", sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
      }
      margin-bottom: 1rem;
    }
  }
  .empty {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    color: gray;
  }
</style>

<!-- <svelte:body class="body" /> -->

<Header />

<main transition:fade={{ duration: 100 }}>
  <div class="welcome">
    <span>Welcome</span>
    <span>to LyricBox</span>
  </div>
  <SearchInput bind:value={inputValue} on:click={search} />
  {#if !inputValue}
    <GenreButtons
      bind:selectedItems
      on:genre={async () => {
        genreMusic = [];
        $validSelectedItems.forEach(async (genre, index) => {
          genreMusic[index] = (await axios.get(`http://127.0.0.1:8000/api/search?query=${genre.name}&limit=${$limit}`)).data.data;
        });
      }} />
  {/if}

  <FavSongList caption={genreMusics.length ? 'Lyrics' : 'History'} />
  <!-- if genre buttons are active -->
  {#if genreMusics.length}
    <MusicItems songs={genreMusics} />
    <!-- if input form is not empty => show the searched musics -->
  {:else if inputValue}
    <MusicItems songs={searchedMusics} />
    <!-- history -->
  {:else if history.length}
    <MusicItems songs={history} />
  {:else}
    <div class="empty">
      <span class="nothing">Oops,there is not any history.</span>
    </div>
  {/if}

</main>
<!-- <svelte:window bind:scrollY={y} /> -->
