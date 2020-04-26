<script>
  import { slide } from "svelte/transition";
  import { selectedSort } from "../params.js";
  export let caption;
  let filterMode = $selectedSort.filterMode;
  let filterOption = $selectedSort.filterOption;
  let button = [];

  //
  function onClick(event) {
    filterOption = Number(event.target.value);
    selectedSort.update(array => {
      array.filterOption = filterOption;
      return array;
    });
  }
  function changeFilterMode() {
    filterMode = !filterMode;
    selectedSort.update(array => {
      array.filterMode = filterMode;
      return array;
    });
  }
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500|Ubuntu:400,500&display=swap");
  @import url("//db.onlinewebfonts.com/c/1064f0ad1cb65fdab43bb592ddd8aa91?family=Gilroy-Bold");

  .FavSongList {
    font-family: "Roboto", sans-serif;
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-bottom: 1rem;
    flex-direction: column;
    .info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 1.7rem;
        display: inline;
      }
      span {
        color: gray;
      }
    }
    .filter {
      border-radius: 20px;
      padding: 1rem;
      background: #eeeeee;
      span {
        font-size: 1.2rem;
        font-weight: 500;
        display: inline;
      }
      label {
        color: #565252;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;
      }
      .inputs {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        button {
          font-size: 14px;
          color: #565252;
          background: none;
          border-radius: 20px;
          padding: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          //   &:hover,
          //   &:checked,
          &.clicked {
            background: rgba($color: #000000, $alpha: 0.1);
          }
        }
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    .filter {
      background: #252427;
    }
    .info span,
    h1 {
      color: white;
    }
    .filter {
      span {
        color: white;
      }
    }
    .filter {
      background:#252427!important;
      button {
        color:gray!important;
      }
    }
  }
</style>

<div class="FavSongList">
  <div class="info">
    <h1>{caption}</h1>
    <span on:click={changeFilterMode}>{filterMode ? 'Filter' : 'All'}</span>
  </div>
  {#if filterMode}
    <div class="filter" transition:slide>
      <span>Sort by</span>
      <div class="inputs">

        <button value={0} on:click={onClick} class:clicked={filterOption == 0}>
          Newest
        </button>

        <button value={1} on:click={onClick} class:clicked={filterOption == 1}>
          Oldest
        </button>

        <button value={2} on:click={onClick} class:clicked={filterOption == 2}>
          Popular
        </button>

      </div>

    </div>
  {/if}

</div>
