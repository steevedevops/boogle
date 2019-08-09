<template>
  <div class="index">
    <div class="wrapper">
      <!-- Menu del lado derecho -->
      <sidebar />
      <!-- Contenido princial -->
      <div class="main">
        <navbar />
        <div class="content">
          <div class="container-fluid">
            <router-view></router-view>
          </div>
        </div>
        <fixedbarplayer />
      </div>
      <!-- Menu del lado izquierdo -->
      <sidebarright />
    </div>
  </div>
</template>
<script>
import navbar from "../components/Navbar.vue";
import sidebar from "../components/Sidebar.vue";
import sidebarright from "../components/SidebarRight.vue";
import fixedbarplayer from "../components/Fixedbarplayer.vue";

export default {
  name: "Index",
  components: {
    navbar,
    sidebar,
    sidebarright,
    fixedbarplayer
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
