<script>
  export let path;

  import { onDestroy, getContext, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { params } from "./params.js";

  import page from "page.js";
  const current_path = getContext("current_path");
  let thisPage;
  page(
    path,

    activePage => {
      params.set(activePage);

      // params.set({ path });

      !path.includes(".js") && ($current_path = path);
    }
  );
</script>

{#if path === $current_path}
  <slot />
{/if}
