<template>
  <div class="headernav">
    <div class="content-nav">
      <form class="form-search">
        <fieldset>
          <input class="input-search" type="search" />
          <button class="button-search" type="submit">
            <i class="fa fa-search"></i>
          </button>
        </fieldset>
      </form>
      <ul class="menus-basic">
        <li>
          <a href="#"><i class="fas fa-bell"></i></a>
        </li>
        <li>
          <a href="#"><i class="fas fa-cog"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "navebar"
};
</script>
