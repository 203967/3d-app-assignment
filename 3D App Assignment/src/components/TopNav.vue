

<template>
  <!-- Logo and navigation bar -->
  <nav
    id="headerColor"
    class="navbar sticky-top navbar-expand-sm navbar_coca_cola"
  >
    <div class="container-fluid">
      <!-- Brand -->
      <div class="logo">
        <a
          class="navbar-brand"
          href="index.html"
        >
          <h1>1</h1>
          <h1>oca</h1>
          <h2>Cola</h2>
          <h3>Journey</h3>
          <p>Refreshing the world, one story at a time</p>
        </a>
      </div>

      <!-- Collapsible Navbar Menu Icon -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Link Menu item button to the links class navbar-collapse selector -->
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <!-- Links -->
        <ul class="navbar-nav ml-auto">
          <!-- Use mx-auto to align centre, default to left or use mr-auto -->
          <li class="nav-item">
            <a
              class="nav-link active"
              href="index.html"
            >Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-toggle="popover"
              data-trigger="hover"
              data-placement="bottom"
              title="About Web 3D Applications"
              data-content="3D Apps is a final year and postgraduate module ..."
            >About</a>
          </li>

          <!-- Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >Drinks</a>
            <div class="dropdown-menu">

              <router-link
                to="/model?id=coke"
                class="dropdown-item"
              >Coca Cola</router-link>
              <router-link
                to="/model?id=sprite"
                class="dropdown-item"
              >Sprite</router-link>
              <router-link
                to="/model?id=pepper"
                class="dropdown-item"
              >Dr Pepper</router-link>

            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              data-toggle="modal"
              data-target="#contactModal"
            >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
<style scoped>
</style>
