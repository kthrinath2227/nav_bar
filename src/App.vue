<template>
<div id="app">
  <div class="row">
    <div class="col-lg-7 col-md-10 col-sm-12">
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
              <input id="input_1" class="input" type="password" placeholder="Enter Password" required />
              <br/>
              <input id="input_2" class="input" type="password" placeholder="Conform Password" required />
              <br/>
              <button type="submit" class="input but">{{ btn }}</button>
             <br/>
              <a id="txt">{{ text_3 }}</a>
              
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
      btn:'Set New Password',
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
  font-size: 2vh;
}
::placeholder {
  font-size:1.5vh;
}

.row {
  display: flex;
  justify-content: center;
}
.container {
  height:98vh;
  width:100vw;


}
.bg-container {
  background-image: url('../src/assets/Artboard 1.png');
  background-color: rgba(14, 14, 41, 0.973);
  background-size: cover;
  width:100%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100% 100%;

}

.white-bg-container {
  background-image: url('../src/assets/Path 34333.svg');
  background-position: top;
  background-repeat: no-repeat;
  width:100%;
  height:7%;
  text-align: center;
  background-size:cover;
  
}

.logo {
  width:40%;
  height:100%;
 
}
.login-container {
  display: flex;
  justify-content:center;
  text-align: center;
  margin-bottom: auto;
  margin-top:17vh;
  font-size:1.5vw;
}
@media (max-width:200px) {
  .login-container {
    margin-top:5vh;
  }
}
.icon {
  width:10vw;
  height:8vh;
  margin: 5px;
}

.input {
  border-radius: 20px;
  border-width: 0px;
  padding:10px;
  height:5vh;
  width:40vw;
  font-weight: 500;
  color:rgb(0, 255, 42);
  margin:10px;
}
.but {
  background-color:blue;
  font-size:1.5vh;
  color:white;
  padding:5px;
}
#txt {
  font-size:1.5vh;
}
</style>