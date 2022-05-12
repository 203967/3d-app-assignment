<template>

  <p class="card-text">This X3D model of the coke can has been created in 3ds Max, exported to VRML97 and
    converted, using the instantreality transcoders, to X3D for display online.</p>
  <h5 class="card-subtitle">Camera Views</h5>
  <div class="camera-btns">
    <p class="card-text">These buttons select a range of X3D model viewpoints</p>
    <div class="btn-group ">
      <div
        href="#"
        @click='show("-posX")'
        class="btn btn-primary btn-responsive camera-font"
      >Front</div>
      <div
        @click='show("posZ")'
        href="#"
        class="btn btn-secondary btn-responsive camera-font"
      >Back</div>
      <div
        href="#"
        class="btn btn-success btn-responsive camera-font"
        @click='show("posX")'
      >Left</div>
      <div
        href="#"
        class="btn btn-danger btn-responsive camera-font"
        @click='show("negX")'
      >Right</div>
      <div
        href="#"
        class="btn btn-warning btn-responsive camera-font"
        @click='show("negY")'
      >Top</div>
      <div
        href="#"
        class="btn btn-outline-dark disabled btn-responsive camera-font"
        @click='show("-posY")'
      >Off</div>
    </div>
  </div>

</template>


<script setup>
import { useRoute } from "vue-router";
import { store } from "../../store";
let str = 'assets/images/gallery_images'
const route = useRoute()
let show = (str) => {
  let x3d = document.getElementById(`x3d-${route.query.id}`)
  x3d.runtime.showAll(str)
}
</script>

