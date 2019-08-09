import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      component: Index,
      children: [
        {
          path: "",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/home/Home.vue")
        },
        {
          path: "myalbum",
          name: "myalbum",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/mymusic/Myalbum.vue")
        },
        {
          path: "mysong",
          name: "mysong",
          component: () =>
            import(/* webpackChunkName: "home" */ "./views/mymusic/Mysong.vue")
        },
        {
          path: "myartiste",
          name: "myartiste",
          component: () =>
            import(
              /* webpackChunkName: "home" */ "./views/mymusic/Myartiste.vue"
            )
        },
        {
          path: "recentplays",
          name: "recentplays",
          component: () =>
            import(
              /* webpackChunkName: "home" */ "./views/recentplays/RecentPlays.vue"
            )
        },
        {
          path: "nowplaying",
          name: "nowplaying",
          component: () =>
            import(
              /* webpackChunkName: "home" */ "./views/nowplaying/Nowplaying.vue"
            )
        }
      ]
    }
  ]
});
