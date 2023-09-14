<template>
<div id="app">
  <div class="row">
    <div :class="'col-lg-7 col-md-10 col-sm-12'">
      <div class="bg-container">
          <div class="container">
            <div class="white-bg-container">
            <img src="../src/assets/AAQ-1904.png" alt="Logo" class="logo"/>
          </div>
          <div class="login-container">
            <div class="icon-container">
            <div>
              <img class="icon"  alt="Icon" src="../src/assets/reset-password.svg" />
            </div>       
            <div>
              <input id="input_1" class="input" type="password" placeholder="Enter Password" />
               <br>
              <label for="input_1" >{{ text_1 }}</label>
              <br>
              <input id="input_2" class="input" type="password" placeholder="Conform Password" />
              <br/>
              <label for="input_2" >{{ text_2 }}</label>
              <br/>
              <button class="input but">{{ btn }}</button>
             <br/>
              <a>{{ text_3 }}</a>
              
            </div> 
          </div>
          </div>
          </div>
          
      </div>
    </div>
  </div> 
</div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      btn:'Set NewPassword',
      text_1:'Password Strenth',
      text_2:'',
      text_3:'< Back to Login'
    }
  }
  
}
</script>

<style>
* {
  box-sizing: border-box;
  padding:0px;
  margin:0px;
  color:white;
}
.row {
  display: flex;
  justify-content: center;
}
.container {
  height:100vh;
  width:auto;

}
.bg-container {
  background-image: url('../src/assets/Artboard 1.png');
  background-color: rgba(15,7,128,0.973);
  background-size: cover;
  width:100%;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1000px) {

.bg-container {

  background-size: 1000px px; /* Force the image to its minimum width */
}
}
.white-bg-container {
  background-image: url('../src/assets/Path 34333.svg');
  background-size: cover;
  height: 10;
  width: 100%;
  background-position: top;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:5px;
}

.logo {
  width:20vw;
  height:;
  margin: 5px;
}
.login-container {
  display: flex;
  justify-content:center;
  text-align: center;
  margin-bottom: auto;
  margin-top:20vh;
  font-size:1.5vw;
}
@media (max-width:200px) {
  .login-container {
    margin-top:5vh;
  }
}
.icon {
  width:9vw;
  height:5vh;
  margin: 10px;
}
.icon-container {
  display: flex;
  flex-direction: column;
  
   
}
.input {
  border-radius: 20px;
  border-width: 0px;
  padding:10px;
  height:5vh;
  width:45vw;
 
  font-weight: 500;
  color:rgb(0, 255, 42);
  margin:10px;
}
.but {
  background-color:blue;
}
</style>