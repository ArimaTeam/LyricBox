<script>
  import { createEventDispatcher } from "svelte";
  export let dark = false,
    width = "3.5rem",
    bordered = false,
    image = "",
    selected = false;
  let dispatch = createEventDispatcher();
</script>

<style type="text/scss">
  button {
    height: 3.7rem;
    background: #eeeeee;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    transition: all 0.5s;
    border: none;
  }
  .selected {
    box-shadow: 14px 18px 36px rgba(0, 0, 0, 0.1);
  }
  .dark {
    background: #161616;
  }

  @media (prefers-color-scheme: dark) {
    button {
      background-color: #252427!important;
      
    }
    img {
      filter:invert(100%);

    }
    button.dark  {
      
      background-color: #252427!important;
  }
  img.dark {
    background:none;
          filter:invert(0);

  }


  }
</style>

<button
  class:selected
  class:dark
  style="width:{width}; border-radius:{bordered ? '20px' : '10px'}; "
  on:click
  on:click={() => {
    dispatch('genre');
  }}>
  <img class:dark src={image ? image : 'images/Group 36.svg'} alt="" />

</button>
