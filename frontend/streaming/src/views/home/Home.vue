<template>
  <div class="home">
    <div class="row">
      <div class="col-md-12">
        <button class="col-md-3 btn btn-danger" @click="onLogout">
          Logout
        </button>
        <br />
        <br />
        <h2>Titulo</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptatibus, repellat labore explicabo saepe iste! Animi deserunt
          reprehenderit ipsa consequuntur, explicabo deleniti veniam? Earum vel,
          et nostrum totam aperiam pariatur.
        </p>
      </div>

      <div class="col-md-6">
        <h2>Titulo dos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptatibus, repellat labore explicabo saepe iste! Animi deserunt
          reprehenderit ipsa consequuntur, explicabo deleniti veniam? Earum vel,
          et nostrum totam aperiam pariatur.
        </p>
        <button class="btn btn-primary">Ver mas</button>
      </div>
      <div class="col-md-6">
        <h2>Titulo dos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptatibus, repellat labore explicabo saepe iste! Animi deserunt
          reprehenderit ipsa consequuntur, explicabo deleniti veniam? Earum vel,
          et nostrum totam aperiam pariatur.
        </p>
        <button class="btn btn-primary">Ver mas</button>
      </div>
      <div class="col-md-6">
        <h2>Titulo dos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptatibus, repellat labore explicabo saepe iste! Animi deserunt
          reprehenderit ipsa consequuntur, explicabo deleniti veniam? Earum vel,
          et nostrum totam aperiam pariatur.
        </p>
        <button class="btn btn-primary">Ver mas</button>
      </div>
      <div class="col-md-6">
        <h2>Titulo dos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptatibus, repellat labore explicabo saepe iste! Animi deserunt
          reprehenderit ipsa consequuntur, explicabo deleniti veniam? Earum vel,
          et nostrum totam aperiam pariatur.
        </p>
        <button class="btn btn-primary">Ver mas</button>
      </div>
      <div class="col-md-6">
        <h2>Titulo dos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          voluptatibus, repellat labore explicabo saepe iste! Animi deserunt
          reprehenderit ipsa consequuntur, explicabo deleniti veniam? Earum vel,
          et nostrum totam aperiam pariatur.
        </p>
        <button class="btn btn-primary">Ver mas</button>
      </div>
    </div>
  </div>
  <!-- <div class="menu">
            <img class="arrow left" src="/static/fstreaming/src/assets/images/demo-arrow-left.png" alt="arrow" height="120">
            <img class="arrow up" src="/static/fstreaming/src/assets/images/demo-arrow-up.png" alt="arrow" height="150">

            <h1>Freebie: 5 Responsive Sidebar Templates</h1>

            <h2><a href="http://tutorialzine.com/2015/04/freebie-5-elegant-and-responsive-sidebar-templates/">Download</a></h2>

            <h2><a href="#">funcionando </a></h2>

            <ul>
                <li><a href="index.html">Basic</a></li>
                <li><a href="sidebar-advanced.html">Advanced</a></li>
                <li><a href="sidebar-left.html">Left</a></li>
                <li><a href="sidebar-collapse.html" class="active">Collapse</a></li>
                <li><a href="sidebar-light.html">Light</a></li>
            </ul>
        </div>	     -->
</template>
<script>
import { APIService } from "../../resource/APIService";
const apiService = new APIService();

export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    onLogout() {
      apiService
        .onLogout()
        .then(data => {
          if (data.success) {
            window.location.href = data.link;
          } else {
            swal("No fue posible sair de tua conta", "", "error");
          }
        })
        .catch(error => {
          swal("No fue posible sair de tua conta", "", "error");
        });
    }
  }
};
</script>
