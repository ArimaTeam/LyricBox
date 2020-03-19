<script>
  import Button from "./Button.svelte";
  export let value;
</script>

<style type="text/scss">
  @import url("//fonts.googleapis.com/css?family=Roboto:400,500|Ubuntu:400,500&display=swap");

  .search-input {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    input {
      width: 80%;
      height: 3.7rem;

      background: #ffffff;
      box-shadow: 11px 15px 33px rgba(0, 0, 0, 0.05);
      border: none;
      border-radius: 10px;
      color: gray;
      font-family: "Roboto", sans-serif;
      padding: 0 1rem;
      font-size: 17px;
      font-weight: lighter;
      margin-right: 0.6rem;
      transition: all 0.5s;
      &:focus,
      &:hover {
        outline: none;
        box-shadow: 14px 18px 36px rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>

<div class="search-input">
  <input type="search" on:input placeholder="Lyric or music name" bind:value />
  <Button dark width="20%" on:click />

</div>
