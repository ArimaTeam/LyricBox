<script>
  import { onDestroy, onMount } from "svelte";
  import { get, writable } from "svelte/store";
  import { slide, fade } from "svelte/transition";
  // default page => to activate the red point
  export let currentPage = "/";
  let footerItems = [
    {
      id: 1,
      image: "/images/Vector.svg",
      link: "/",
      name: "home"
    },
    {
      id: 2,
      image: "/images/Vector (3).svg",
      link: "/search",
      name: "search"
    },
    {
      id: 3,
      image: "/images/Vector (2).svg",
      link: "/favorite",
      name: "favorite"
    }
  ];
</script>

<style type="text/scss">
  /*IE9*/
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
  .footer {
    background: white;
    position: fixed;
    bottom: 0;
    height: 4rem;
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
    border-radius: 35px 35px 0px 0px;
    width: 100%;
    align-items: center;

    ul {
      height: 100%;
      padding: 0;
      margin: 0 auto;
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          outline: none;
          img {
            outline: none;
            &:focus {
              outline: none;
            }
          }
        }
      }
    }
    .active {
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
      background: #e12424;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
    @media (prefers-color-scheme: dark) {
      
      .footer {
        background: #252427;
      }
      img {
        -webkit-filter: invert(100%); /* Safari/Chrome */
        filter: invert(100%);
      }
    }
  }
</style>

<div class="footer">
  <ul>
    {#each footerItems as item (item.id)}
      <li>
        <a href={item.link}>
          <img src={item.image} alt={item.name} />
          {#if item.link === currentPage}
            <div transition:fade={{ duration: 100 }} class="active" />
          {/if}
        </a>
      </li>
    {/each}

  </ul>
</div>
