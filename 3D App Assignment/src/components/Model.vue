<template>
  <div :id="$route.query.id">
    <!-- Row to hold two cards to hold 1) the X3D model and 2) the gallery -->
    <div class="row">
      <!-- Column to hold the X3D Model -->
      <div class="col-sm-9">
        <div class="card text-left">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <router-link
                  to="/model?id=coke"
                  class="nav-link active"
                >Coke</router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/model?id=sprite"
                  class="nav-link active"
                >Sprite</router-link>

              </li>
              <li class="nav-item">
                <router-link
                  to="/model?id=pepper"
                  class="nav-link active"
                >Pepper</router-link>

              </li>
            </ul>
          </div>

          <!-- Bootstrap 4 card body to hold information about the X3D model-->
          <div class="card-body">
            <h4 class="card-title">{{descriptive[$route.query.id].title}} X3D Model</h4>

            <!-- Place the X3D code here -->
            <!-- Temporary image instead of 
                      <div id="main_3d_image"></div>-->
            <div class="model3D">
              <x3d
                :id='`x3d-${item}`'
                v-for="item in ['coke', 'sprite', 'pepper']"
                :key="item"
                v-show="$route.query.id === item"
              >
                <scene :id='`scene-${item}`'>
                  <viewpoint
                    position="0 0 0"
                    :id='`vp-${item}`'
                  ></viewpoint>

                  <inline
                    :url="`./assets/x3d/${item}.x3d`"
                    :id='item'
                  > </inline>

                </scene>
              </x3d>
            </div>
            <!-- xxxxxxxx -->
            <camera-ctrl />
          </div>
        </div>
      </div>
      <!-- Column to hold 3D Image gallery -->
      <gallery></gallery>
    </div>

    <!-- Row to hold 1 card to hold the coca cola descriptive text, etc. -->
    <div class="row">
      <card
        :title='descriptive[$route.query.id].title'
        :content='descriptive[$route.query.id].content'
      ></card>
    </div>
  </div>

</template>


<script setup>

import Card from './Comps/Card.vue'
import Gallery from './Comps/Gallery.vue'
import CameraCtrl from './Comps/CameraCtrl.vue'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const descriptive = {
  coke: {
    title: 'Coca Cola',
    content: `Atlanta Beginnings: It was 1886, and in New York Harbour, workers were constructing
              the Statue of Liberty. Eight hundred miles away, another great American symbol was about to be unveiled.
              Like many people who change history,
              John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity. One afternoon, he stirred up a
              fragrant, caramel-coloured liquid and, when it was done, he carried it a few doors down to Jacobs'
              Pharmacy. Here,
              the mixture was combined with carbonated water and sampled by customers who all agreed - this new drink
              was something special. So Jacobs' Pharmacy put it on sale for five cents (about 3p) a glass.`
  },
  pepper: {
    title: 'Dr Pepper',
    content: `Dr Pepper's unique, sparkling blend of 23 fruit flavours has been around for well
              over a century and it's still the same, with that distinctive flavour you just can't quite put your
              tongue on. It was created by Texas pharmacist
              Charles Alderton in 1885. He gave a sample of the first ever batch to Wade Morrison, a local shop owner,
              and Mr Morrison instantly agreed to stock the drink. The distinctive, bold taste of Dr Pepper has been
              popular ever
              since.`
  },
  sprite: {
    title: 'Sprite',
    content: `First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world's
              leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite
              Zero, part of our no sugar Zero range,
              offers the delicious lemon lime taste of Sprite without the sugar or calories. `
  },
}
const fit = () => {
  nextTick(() => {
    setTimeout(() => {
      let x3d = document.getElementById(`x3d-${route.query.id}`)
      x3d.runtime.fitAll(false)
      console.dir(x3d)
    }, 10);

  })

}
const route = useRoute()
watch(() => route.query.id, () => {
  fit()
})

nextTick(() => {
  // x3dom.reload()
  x3dom.reload()
  console.log('🚀 ~ x3dom', x3dom)

  let vp = document.getElementById(`vp-${route.query.id}`)
  console.log('🚀 ~ vp', vp)
  setTimeout(() => {
    ['coke', 'sprite', 'pepper'].map(i => {
      let x3d = document.getElementById(`x3d-${i}`)
      x3d.runtime.fitAll(false)
    })
  }, 1000);
})

</script>

