<script>
  import Header from "../UI/Header.svelte";
  import { slide, fade } from "svelte/transition";
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
  main {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    margin: 0 auto;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ways {
      margin-top: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      a {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        margin-bottom: 2rem;
      }
    }
    p {
      font-size: 0.7rem;
      position: fixed;
      bottom: 4rem;
    }
    color: gray;
    background: #f8f8f8;
    @media (prefers-color-scheme: dark) {
      background: #373539;
    }
  }
</style>

<Header contactMode={false} />
<main transition:fade={{ duration: 100 }}>
  <div class="ways">
    <a href="">
      <span>Our Twitter</span>
    </a>
    <a href="">
      <span>Get in touch</span>
    </a>
    <a href="">
      <span>About us</span>
    </a>
  </div>
  <p>2020 all rights reserved</p>
</main>
