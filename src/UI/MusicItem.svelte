<script>
  import { fade } from "svelte/transition";
  import _ from "lodash";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let stars = "",
    link = "",
    image = "",
    singer = "",
    title = "",
    id = "";
  let liked;
  $: _.findIndex(JSON.parse(localStorage.getItem("favorites")), {
    // check the like or .....
    id
  }) > -1
    ? (liked = true)
    : (liked = false);
  function addLike() {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    if (
      !(
        _.findIndex(favorites, {
          id
        }) > -1
      )
    ) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([
          {
            id,
            image,
            singer,
            title,
            score: stars,
            link
          },
          ...favorites
        ])
      );
      liked = true;

      // liked = true;
    } else {
      let likedSongIndex = _.findIndex(favorites, {
        id
      });
      favorites.splice(likedSongIndex, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      liked = false;
    }
  }
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500,300,600|Ubuntu:400,500&display=swap");
  @import url("//db.onlinewebfonts.com/c/1064f0ad1cb65fdab43bb592ddd8aa91?family=Gilroy-Bold");

  .music-item {
    display: flex;
    flex-wrap: nowrap;
    font-family: "Roboto", sans-serif;
    justify-content: space-between;
    height: 6.3rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(197, 197, 197, 0.22);
    .left {
      display: flex;
      flex-wrap: nowrap;
      font-family: "Roboto", sans-serif;
    }
    img#cover {
      border: none;
      background: #eeeeee;
      border-radius: 10px;
      width: 100px;
      height: 100px;
      margin-right: 10px;
      background: gray;
    }
    .info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .stars {
        // margin-top: 1.7rem;
        display: flex;

        align-items: center;
        justify-content: flex-start;
        img {
          margin-right: 5px;
        }
        span {
          margin-top: 3px;
          font-size: 17px;
          font-weight: 400;
        }
      }
    }
    .text {
      padding-top: 0.3rem;

      display: flex;
      flex-direction: column;
      a,
      a:hover {
        text-decoration: none;
        color: black;
      }
      span:nth-child(1) {
        font-size: 1rem;
        font-weight: 600;
      }
      span:nth-child(2) {
        font-size: 0.7rem;
        font-weight: 500;
        color: gray;
      }
    }
    .like {
      width: 1rem;
      height: 5rem;

      img {
        margin-top: 0.3rem;
      }
    }
  }
  @media (prefers-color-scheme: dark) {
    .text {
      span:nth-child(1) {
        color: white;
      }
    }
    .stars {
      color: white;
    }
  }
</style>

<div class="music-item" in:fade={{ duration: 300 }}>
  <div class="left">

    <img id="cover" src={image} alt="" />

    <div class="info">
      <div class="text">
        <a href={link}>
          <span>{title}</span>
        </a>
        <span>By {singer}</span>
      </div>
      <div class="stars">
        <img src="images/star.png" alt="" />
        <span>{stars}</span>
      </div>
    </div>
  </div>
  <div class="like" on:click={() => dispatch('change')}>
    {#if liked}
      <img src="images/Vector (4).png" alt="" on:click={addLike} />
    {:else}
      <img src="images/Vector (5).png" alt="" on:click={addLike} />
    {/if}
  </div>

</div>
