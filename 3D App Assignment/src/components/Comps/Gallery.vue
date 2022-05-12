<template>

  <div class="col-sm-3">
    <div class="card text-left">
      <div class="card-header gallery-header">
        Gallery
      </div>
      <div class="card-body">
        <h4 class="card-title">3D Image Gallery</h4>
        <!-- Dynamically generated image gallery using JS and PHP -->
        <div
          class="gallery"
          id="gallery_coke"
        >
          <a
            v-for="item in store.imgList"
            :href="`${str}${item}`"
            :key="item"
          >
            <img
              class="card-img-top img-thumbnail"
              :src="`${str}${item}`"
            />
          </a>

        </div>
        <p class="card-text">These 3D images of the Coke can, Sprite bottle and Dr Pepper cup are rendered in 3ds
          Max 2017 with Mental Ray</p>
      </div>
    </div>
  </div>

</template>


<script setup>
import { store } from "../../store";
let str = './assets/images/gallery_images'
</script>

