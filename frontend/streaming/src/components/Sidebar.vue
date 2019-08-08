<template>
  <div class="sidebar">
    <h3>Mooby Music</h3>
    <div class="user_data">
      <div class="content_profile">
        <img class="img_profile" src="../assets/img/profilesteeve.jpg" alt title="profile" />
      </div>
      <div class="content-info">
        <h4 class="info-email">Steeve bernard Pypro</h4>
      </div>
    </div>
    <ul class="main-nav-ul">
      <li>
        <!-- <a href="#"><i class="fas fa-home"></i>Home</a> -->
        <router-link class=".router-link-active" :to="{name: 'home'}">
          <i class="fas fa-home"></i>Home
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'recentplays'}">
          <i class="fas fa-file-invoice"></i>Recents Plays
        </router-link>
      </li>
      <li class="submenu">
        <a href="#">
          <i class="fas fa-music"></i>My Music
          <span class="sub-arrow"></span>
        </a>
        <ul>
          <li>
            <router-link :to="{name: 'mysong'}">Song</router-link>
          </li>
          <li>
            <router-link :to="{name: 'myartiste'}">Artists</router-link>
          </li>
          <li>
            <router-link :to="{name: 'myalbum'}">Albums</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link :to="{name: 'nowplaying'}">
          <i class="fas fa-file-invoice"></i>Now Playing
        </router-link>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-heart"></i>Favoritos
        </a>
      </li>
    </ul>
    <div class="social_media">
      <a href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "sidebar",
  data() {
    return {};
  },
  methods: {
	  toogleSubmenu(){
		$(".submenu").click(function(){
          $(this).children("ul").slideToggle();
      	});
	  }
  },
  mounted() {
	  this.toogleSubmenu();
  }
};
</script>

<style lang="css" scoped>
</style>

