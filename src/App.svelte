<script>
  import Home from "./routes/Home.svelte";
  import Search from "./routes/Search.svelte";
  import Favorite from "./routes/Favorite.svelte";
  import NotFound from "./routes/NotFound.svelte";
  import Router from "./Router.svelte";
  import Route from "./Route.svelte";
  import Footer from "./UI/Footer.svelte";
  import Contact from "./routes/Contact.svelte";
  import Lyric from "./routes/Lyric.svelte";
  import JustMobile from "./UI/JustMobile.svelte";

  import { onDestroy, getContext, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { params } from "./params.js";
  let width;
  let showContent = true;
  // create user agent
  $: if (width <= 700) {
    showContent = true;
    console.log(showContent);
  } else {
    showContent = false;
    console.log(showContent);
  }

  // $: if () {console.log(window.innerWidth);}

  // onDestroy(
  //   getContext("params").subscribe(params => {
  //     console.log(params);
  //   })
  // );
</script>

<style type="text/scss">
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
  :global(body) {
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    background: #f8f8f8;
    @media (prefers-color-scheme: dark) {
      background: #373539;
      color: white;
    }
  }
</style>

<svelte:window bind:innerWidth={width} />
<!-- 
<svelte:component this={page} {params} /> -->
{#if showContent}
  <Router>
    <Route path="/">
      <Home />
    </Route>
    <Route path="/search/">
      <Search />
    </Route>
    <Route path="/favorite">
      <Favorite />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/lyric/:id">
      <Lyric />
    </Route>

    <!-- <Route path="/*">Not found</Route> -->
  </Router>
  <Footer currentPage={$params.canonicalPath} />
{:else}
  <JustMobile />
{/if}
