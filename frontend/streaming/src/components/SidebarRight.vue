<template>
  <div class="sidebarRight">
    <h3>Sticky sidebar</h3>
    <p>I will follow you!</p>
  </div>
</template>

<script>
export default {
  name: "sidebarrigth",
  data() {
    return {};
  },
  methods: {
    onClickMenu() {
      $(function() {
        var links = $(".sidebar-links > div");
        links.on("click", function() {
          links.removeClass("selected");
          $(this).addClass("selected");
        });
      });
    }
  },
  mounted() {
    this.onClickMenu();
  }
};
</script>

<style lang="sass" scoped></style>
