<template>
  <nav
    id="footerColor"
    class="navbar navbar-expand-sm footer"
  >
    <div class="container-fluid">
      <div class="navbar-text float-left copyright">
        <p><span class="align-baseline">& copy 2020 3D Apps | <div
              class="btn"
              @click="changeLook()"
            >Restyle</div> | <div
              class="btn"
              @click="changeBack()"
            >Reset</div></span></p>
      </div>
      <div class="navbar-text social">
        <a href="#"><i class="fab fa-github-square fa-2x fa-pull-right"></i></a>
        <a href="#"><i class="fab fa-google-plus-square fa-2x fa-pull-right"></i></a>
        <a href="#"><i class="fab fa-twitter-square fa-2x fa-pull-right"></i></a>
        <a href="#"><i class="fab fa-facebook-square fa-2x fa-pull-right"></i></a>
      </div>
    </div>
  </nav>
</template>


<script setup>
let counter = 0
function changeLook () {
  counter += 1;
  switch (counter) {
    case 1:
      document.getElementById('bodyColor').style.backgroundColor = 'lightblue';
      document.getElementById('headerColor').style.backgroundColor = '#FF0000';
      document.getElementById('footerColor').style.backgroundColor = '#FF9900';
      break;
    case 2:
      document.getElementById('bodyColor').style.backgroundColor = '#FF6600';
      document.getElementById('headerColor').style.backgroundColor = '#FF9999';
      document.getElementById('footerColor').style.backgroundColor = '#996699';
      break;
    case 3:
      document.getElementById('bodyColor').style.backgroundColor = 'coral';
      document.getElementById('headerColor').style.backgroundColor = 'darkcyan';
      document.getElementById('footerColor').style.backgroundColor = 'darksalmom';
      break;
    case 4:
      counter = 0;
      document.getElementById('bodyColor').style.backgroundColor = 'lightgrey';
      document.getElementById('headerColor').style.backgroundColor = 'chocolate';
      document.getElementById('footerColor').style.backgroundColor = 'dimgrey';
      break;
  }
}


function changeBack () {
  document.getElementById('bodyColor').style.backgroundColor = '#FFFFFF';
  document.getElementById('headerColor').style.backgroundColor = 'rgba(175,0,0,1)';
  document.getElementById('footerColor').style.backgroundColor = 'rgba(175,0,0,1)';
}
</script>


<style scoped>
</style>
