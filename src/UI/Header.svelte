<script>
  import { previousLink } from "../params.js";
  import { slide, fade } from "svelte/transition";

  export let lyricMode = false,
    href = "/",
    image = "images/Ed_Sheeran_-_Beautiful_People.png",
    singer = "no singer",
    songName = "no Name",
    stars = 1,
    contactMode = true;
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500|Ubuntu:400,500&display=swap");

  *::selection {
    background-color: transparent;
  }
  *::-moz-selection {
    background-color: transparent;
  }
  * {
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    /*IE10*/
    -ms-user-select: none;
    user-select: none;

    /*You just need this if you are only concerned with android and not desktop browsers.*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  .header {
    font-family: "Ubuntu", sans-serif;
    width: 90%;
    margin: 0 auto;
    display: flex;
    padding: 0rem 1rem;
    color: #000000;
    flex-direction: column;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    li {
      list-style: none;
      &#last {
        width: 1.5rem;
        height: 1rem;
        background-image: url("../images/Group 19.png");
        background-size: cover;
      }
    }
  }
  a {
    text-decoration: none;
    color: #000000;
    width: 5.3rem;
  }
  span:nth-child(1) {
    font-size: 1.9rem;
    font-weight: 500;
  }
  span:nth-child(2) {
    font-weight: 500;
    font-size: 0.7rem;
    margin-left: -3px;
  }
  img {
    width: 2rem;
    height: 0.7rem;
  }
  #close {
    // width: 1.5rem;
    // height: 1rem;
    width: 1.5rem;
    height: 1rem;
    background-image: url("../images/Group 30.png");
    background-size: cover;
    a {
      width: 2rem;
      height: 2rem;
      position: absolute;
    }
  }
  .lyricInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    .line {
      width: 95%;
      margin: auto;
      margin-top: 0.5rem;
      border: 1px solid rgba(196, 196, 196, 0.3);
    }
    .img {
      width: 100%;
      height: 4rem;
      overflow: hidden;
      border-radius: 10px;
      background-size: cover;
      background-position: center;
      margin-bottom: 0.7rem;
    }
    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-family: "Roboto", sans-serif;
        span:nth-child(1) {
          font-size: 1.2rem;
          font-weight: 600;
        }
        span:nth-child(2) {
          font-size: 0.7rem;
          color: gray;
          font-weight: lighter;
          margin-left: 0.1rem;
        }
      }
      .stars {
        display: flex;
        align-items: flex-start;

        span {
          font-weight: 400;
          font-size: 16px;
        }

        img {
          margin-right: 0.4rem;
          width: 1rem;
          height: 1rem;
        }
      }
    }
  }
  #last {
    a {
      width: 2rem;
      height: 2rem;
      position: absolute;
    }
  }

  @media (prefers-color-scheme: dark) {
    .header {
      a {
        color: white;
      }
      li {
        color: red;

        &#last {
          background-image: url("../images/Group 19 (1).png");
        }
      }
    }
    #close {
      background-image: url("../images/Group 30 (1).png");
    }
    .title {
      span:nth-child(1) {
        color: white;
      }
    }
    .line {
      width: 95%;
      margin: auto;
      margin-top: 0.5rem;
      border: 1px solid rgba(0, 0, 0, 0.22);
    }
  }
</style>

<div class="header" transition:fade={{ duration: 100 }}>
  <ul>
    {#if lyricMode}
      <li id="close">
        <a href={$previousLink ? $previousLink : href} />
      </li>
    {/if}
    <li>
      <a href="/">
        <span>lyric</span>
        <span>Box</span>
      </a>
    </li>
    {#if contactMode}
      <li id="last">
        <a href="/contact" />
      </li>
    {/if}
  </ul>
  {#if lyricMode}
    <div class="lyricInfo">
      <div class="img" style=" background-image: url({image}); " />
      <div class="info">
        <div class="title">
          <span>{songName}</span>
          <span>By: {singer}</span>
        </div>
        <div class="stars">
          <img src="/images/star.png" alt="" />
          <span>{stars}</span>
        </div>
      </div>
      <div class="line" />

    </div>
  {/if}

</div>
