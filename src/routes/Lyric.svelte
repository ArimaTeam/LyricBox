<script>
  import Header from "../UI/Header.svelte";
  import { params } from "../params.js";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import axios from "axios";
  import _ from "lodash";
  let copyInput;
  let id = $params.params.id; // song id
  let song = "";
  let change = false;
  onMount(async () => {
    song = (await axios.get(`http://127.0.0.1:8000/api/musics/${id}`)).data
      .data;
    let history = JSON.parse(localStorage.getItem("history"));

    if (
      !(
        _.findIndex(history, {
          id: song.id
        }) > -1
      )
    ) {
      history = [song, ...history];
      localStorage.setItem("history", JSON.stringify(history));
    }
    console.log(song);
  });
  let favorites = [];
  $: if (change || !change) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  }

  function addLike() {
    //  favorites = JSON.parse(localStorage.getItem("favorites"));
    change = !change;
    if (
      !(
        _.findIndex(favorites, {
          id: song.id
        }) > -1
      )
    ) {
      localStorage.setItem("favorites", JSON.stringify([song, ...favorites]));
    } else {
      let likedSongIndex = _.findIndex(favorites, {
        id: song.id
      });
      favorites.splice(likedSongIndex, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    console.log(favorites);
  }
  console.log();
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Inter:400,500,700&display=swap");
  @font-face {
    font-family: SegoeUI;
    src: local("Segoe UI"),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2)
        format("woff2"),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff)
        format("woff"),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf)
        format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: SegoeUI;
    src: local("Segoe UI Bold"),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2)
        format("woff2"),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff)
        format("woff"),
      url(//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf)
        format("truetype");
    font-weight: 600;
  }
  .wait {
    margin-top: 6rem;
    display: flex;
    justify-content: center;

    span {
      font-size: 16px;
      color: gray;
    }
  }
  main {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 15rem;
    .lyrics {
      font-family: "Segoe UI", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 0.03em;

      line-height: 100%;
    }
  }
  .buttons {
    position: fixed;
    bottom: 5rem;
    width: 85%;
    height: 9rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    button {
      width: 48%;
      height: 3.6rem;
      background: #ffffff;
      box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 10px;

      img {
        width: 16px;
        height: 16px;
      }
      &.translate {
        opacity: 0.7;
      }
    }
    button::hover,
    button::focus {
      background: red;
    }
    .like {
      width: 100%;
    }
  }
  input {
    z-index: -25;
    position: absolute;
    bottom: 0;
    opacity: 0;
  }
</style>

{#if song}
  <Header
    lyricMode
    stars={song.score}
    songName={song.title}
    image="http://localhost:8000/api/musics/{song.id}/poster"
    singer={(song.singer.first_name ? song.singer.first_name : song.singer) + ' ' + (song.singer.last_name ? song.singer.last_name : ' ')} />
  <main transition:fade>
    <div class="lyric">
      <p>{song.lyric}</p>
    </div>
    <div class="buttons">
      <button
        class="share"
        on:click={() => {
          copyInput.select();
          copyInput.setSelectionRange(0, 99999);
          document.execCommand('copy');
        }}>
        <img src="/images/Group 27.svg" alt="" />
      </button>
      <button class="translate">
        <img src="/images/Group.svg" alt="" />
      </button>
      <button class="like" on:click={addLike}>
        {!(_.findIndex(favorites, {
            id: song.id
          }) > -1) ? 'Add to Favorites' : 'liked'}
      </button>
      <input bind:this={copyInput} type="text" value={document.location.href} />
    </div>

  </main>
{:else}
  <div class="wait">
    <span>Please wait...</span>
  </div>
{/if}
