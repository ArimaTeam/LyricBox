<script>
  import Header from "../UI/Header.svelte";
  import { slide, fade } from "svelte/transition";

  import { onMount, onDestroy, getContext, setContext } from "svelte";
  import { writable, get } from "svelte/store";
  import { searchY, limit } from "../params.js";
  import SearchInput from "../UI/SearchInput.svelte";
  import MusicItems from "../UI/MusicItems.svelte";
  import axios from "axios";

  import _ from "lodash";
  // onDestroy(() => {
  //   searchY.set(y);
  // });
  // let y;
  // onMount(() => {
  //   y = $searchY;
  // });

  let inputValue = "",
    selectedItems;

  let history;

  let sortedHistory;

  let searchedMusics;
  $: if (!inputValue) {
    searchedMusics = undefined;
    history = localStorage.getItem("searchHistory")
      ? JSON.parse(localStorage.getItem("searchHistory"))
      : undefined;
  }
  $: {
    sortedHistory = _.sortBy(history, element => element.length); // sort as size
    sortedHistory = _.uniq(sortedHistory); //create uniq items
    if (sortedHistory.length > 5) {
      // show last 5
      sortedHistory = _.slice(
        sortedHistory,
        sortedHistory.length - 6,
        sortedHistory.length - 1
      );
    }
  }
  async function search() {
    if (inputValue) {
      searchedMusics = (await axios.get(
        `http://127.0.0.1:8000/api/search?query=${inputValue}&limit=${$limit}`
      )).data.data;
      let searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
      searchHistory.push(inputValue);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  }
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500,600|Ubuntu:400,500&display=swap");
  @import url("//db.onlinewebfonts.com/c/1064f0ad1cb65fdab43bb592ddd8aa91?family=Gilroy-Bold");

  main {
    padding-top: 4rem;
  }
  .title {
    color: gray;
    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    width: 90%;
    margin: 0 auto;
    margin-top: 40vh;
    display: flex;
    justify-content: flex-start;
    span {
      margin-left: 2rem;
    }
    margin-bottom: 1rem;
  }
  .history {
    display: flex;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    flex-wrap: wrap;
    button {
      margin-right: 0.5rem;
      color: gray;
      border: none;
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      background: #e7e7e7;
      border-radius: 10px;
      padding: 10px 25px;
    }
  }
</style>

<!-- <svelte:window bind:scrollY={y} /> -->

<Header />

<main transition:fade={{ duration: 100 }}>
  <SearchInput bind:value={inputValue} on:click={search} />

  <!-- <MusicItems /> -->
  {#if searchedMusics}
    <MusicItems songs={searchedMusics} />
  {:else}
    <div class="title" transition:fade={{ duration: 200 }}>
      <span>History</span>
    </div>
    <div class="history" transition:fade={{ duration: 200 }}>
      {#each sortedHistory as historyButton}
        <button
          on:click={() => {
            inputValue = historyButton;
            search();
          }}>
          {historyButton}
        </button>
      {/each}
    </div>
  {/if}

</main>
