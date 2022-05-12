<template>

  <!-- Row to hold 1 card to hold the coca cola descriptive text, etc. -->
  <div class="row">
    <!-- Coca Cola Column -->
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{{title}}</h3>
          <p class="card-text">{{content}}</p>
          <a
            :href="`https://www.google.com/search?q=${title}`"
            class="btn btn-primary"
            target="_blank"
          >Find out more ...</a>
        </div>
      </div>
    </div>
  </div>

</template>


<script setup>
import { defineProps } from 'vue'
defineProps({
  title: String,
  content: String,
})
</script>

