<script>
  import Button from "./Button.svelte";
  import { setContext, createEventDispatcher } from "svelte";
  import { validSelectedItems } from "../params.js";
  import { fade } from "svelte/transition";
  let dispatch = createEventDispatcher();
  import _ from "lodash";
  let selectedItems = $validSelectedItems;

  // moving the selected items to writable store
  $: {
    validSelectedItems.set(_.compact(selectedItems));
  }

  let GenreMusic = [
    {
      id: 1,
      image: "/images/music/Group 33 (2).svg",
      selected: false,
      name: "Rap"
    },
    {
      id: 2,
      image: "/images/music/piano 1 (1).svg",
      selected: false,
      name: "Classical"
    },
    {
      id: 3,
      image: "images/music/trumpet 1.svg",
      selected: false,
      name: "Jazz"
    },
    { id: 4, image: "images/music/guitar 1.svg", selected: false, name: "Pop" },
    { id: 5, image: "images/music/dj 1.svg", selected: false, name: "Blues" }
  ];
  let button;
</script>

<style type="text/scss">
  .GenreButtons {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>

<div
  class="GenreButtons"
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 200 }}>
  {#each GenreMusic as music (music.id)}
    <Button
      image={music.image}
      bordered
      on:genre
      on:click={() => {
        _.findIndex(selectedItems, {
          id: music.id
        }) > -1 ? (selectedItems[music.id - 1] = null) : (selectedItems[music.id - 1] = { id: music.id, image: music.image, selected: true, name: music.name });
      }}
      selected={selectedItems[music.id - 1] ? true : false} />
  {/each}

</div>
