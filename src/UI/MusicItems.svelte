<script>
  import { fade } from "svelte/transition";
  import shortid from "shortid";
  import MusicItem from "./MusicItem.svelte";
  import _ from "lodash";
  import { selectedSort, params, previousLink } from "../params.js";
  export let sort = true;

  export let songs;

  previousLink.set($params.path);
  let songsSorted = [];
  console.log(songs);
  $: {
    if (sort) {
      console.log(songs);

      songsSorted = _.sortBy(songs, [
        song => {
          if ($selectedSort.filterOption == 0) {
            return song.id;
          } else if ($selectedSort.filterOption == 1) {
            return !song.id;
          } else if ($selectedSort.filterOption == 2) {
            return !song.score;
          }
        }
      ]);
    } else {
      songsSorted = songs;
    }
  }
</script>

<style type="text/scss">
  .music-items {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
</style>

<div class="music-items" transition:fade={{ duration: 300 }}>
  {#each songsSorted as song (shortid.generate())}
    <MusicItem
      title={song.title}
      singer={(song.singer.first_name ? song.singer.first_name : song.singer) + ' ' + (song.singer.last_name ? song.singer.last_name : ' ')}
      stars={song.score}
      image="http://localhost:8000/api/musics/{song.id}/poster"
      link="/lyric/{song.id}"
      id={song.id}
      on:change />
  {/each}

</div>
