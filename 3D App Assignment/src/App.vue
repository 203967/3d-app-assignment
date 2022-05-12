
<template>
  <v-nav></v-nav>
  <contact-modal></contact-modal>
  <router-view class="container-fluid main_contents"></router-view>
  <v-footer></v-footer>
</template>

<script setup>
import ContactModal from './components/ContactModal.vue'
import VFooter from './components/Footer.vue'
import VNav from './components/TopNav.vue'


$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});
</script>

<style>
#app {
}
</style>
