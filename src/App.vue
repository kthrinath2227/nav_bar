<template>
<div id="app">
  <div class="row">
    <div :class="'col-lg-6 col-md-8 col-sm-10'">
      <div class="bg-container">
          <div class="white-bg-container">
            <img src="../src/assets/AAQ-1904.png" alt="Logo" class="logo"/>
          </div>
          
      </div>
    </div>
  </div>
      
</div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
 
  
}
</script>

<style>
* {
  box-sizing: border-box;
  padding:0px;
  margin:0px
}
.row {
  display: flex;
  justify-content: center;
}
.bg-container {
  background-image: url('../src/assets/Artboard 1.png');
  background-color: rgba(15,7,128,0.973);
  height:99vh;
  background-size: cover;
  width:auto;

  background-position: top;
}
@media (max-width: 1000px) {

.bg-container {
    background-size: 1000px px; /* Force the image to its minimum width */
}
}
.white-bg-container {
  background-image: url('../src/assets/Path 34333.svg');
  background-size: cover;
  height: auto;
  width: 100%;
  background-position: top;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:5px;
}
.logo {
  width:160px;
  height:auto;
  margin: 5px;
}


</style>