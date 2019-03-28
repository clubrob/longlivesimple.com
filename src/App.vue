<template>
  <div id="app">
    <a id="top"></a>
    <header>
      <navigation-menu1></navigation-menu1>
    </header>
    <main>
      <!--<img src="./assets/logo.png" alt="Vue.js PWA">-->
      <router-view></router-view>
    </main>
    <footer-custom></footer-custom>
  </div>
</template>

<script>
import footerCustom from './components/Footer.vue'
import NavigationMenu1 from './components/Nav1'
export default {
  components: {
    NavigationMenu1,
    footerCustom},
  name: 'app'
}
</script>

<style lang="scss">

body {
  margin: 0;
  /*These are the fonts for the Website so one is primary and one is secondary*/

  /*font-family: 'Karla', sans-serif;*/
}

#app {
  font-family: 'Karla', sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: gray;
}

main {
  text-align: center;
  /*font-family: 'Karla', sans-serif;*/
  /*margin-top: 40px;*/
}

/*header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}*/

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

</style>
