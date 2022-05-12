<template>
  <div class="container-fluid main_contents">
    <!-- Home page block element -->
    <div id="home">
      <div class="row">
        <!-- Main_3D Image or Carousel -->
        <div class="col-sm-12">
          <div id="main_3d_image">
            <div
              id="main_text"
              class="col-xs-12 col-sm-4"
            >
              <h2>Coca Cola Great Britain</h2>
              <h3>Founded by Dr John S Pemberton</h3>
              <p>The Coca Cola Company is the world's leading manufacturer, marketer and distributor of non-alcoholic
                beverage concentrates and syrups, and produces nearly 400 brands.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Row of cards on the grid -->
      <div class="row">
        <!-- Coca Cola Column -->
        <div
          class="col-sm-4"
          v-for="item in cards"
          :key="item.id"
        >
          <div class="card">
            <router-link :to="`/model?id=${item.id}`">
              <img
                class="card-img-top img-fluid img-thumbnail"
                :src="`assets/images/site_images/${item.img}.jpg`"
                :alt="item.title"
              >
            </router-link>
            <div class="card-body">
              <h3 class="card-title">{{item.title}}</h3>
              <p class="card-text">{{item.text}}</p>
              <router-link
                :to="`/model?id=${item.id}`"
                class="btn btn-primary"
              >Find out more ...</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>

const cards = [
  {
    id: 'coke', img: 'coca_cola', title: 'Coca Cola', text: `It was 1886, John Pemberton, an Atlanta pharmacist, was inspired by simple curiosity.
                One afternoon, he stirred up a fragrant, caramel-coloured liquid and, when it was done, the mixture was
                combined with carbonated water and
                sampled by customers who all agreed - this new drink was something special!` },
  {
    id: 'sprite', img: 'sprite', title: 'Sprite', text: `First introduced in 1961, crisp, refreshing, clean-tasting Sprite is now the world's
                leading lemon and lime flavoured soft drink and is sold in more than 190 different countries. Sprite
                Zero, part of our no sugar Zero range,
                offers the delicious lemon lime taste of Sprite without the sugar or calories.` },
  {
    id: 'pepper', img: 'dr_pepper', title: 'Dr Pepper', text: `Dr Pepper's unique, sparkling blend of 23 fruit flavours has been around for well
                over a century and it's still the same, with that distinctive flavour you just can't quite put your
                tongue on. It was created by Texas pharmacist
                Charles Alderton in 1885.` },
]
</script>


<style scoped>
</style>
