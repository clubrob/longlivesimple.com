<template>
  <div>
    <a id="top"></a>
    <header>
      <navigation-menu ref="navigationMenu" :isOpen="isOpen"></navigation-menu>
    </header>
    <main>
      <nuxt/>
    </main>
    <footer-custom ref="appFooter"></footer-custom>
  </div>
</template>

<script>
import footerCustom from "../components/Footer.vue";
import navigationMenu from "../components/Nav";
export default {
  components: {
    navigationMenu,
    footerCustom
  },
  name: "app",
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: "Karla", sans-serif, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #808080;
}
main {
  text-align: center;
  padding-top: 50px;
}
a {
  color: RGB(76, 191, 160);
}
a:hover {
  color: #000;
}
strong,
.title,
.subtitle,
.content .title,
.content .subtitle {
  color: #808080;
}
// Global utility classes
.z-1 {
  z-index: 1;
}
.z-2 {
  z-index: 2;
}
.z-top {
  z-index: 999;
}
@media screen and (min-width: 1088px) {
  main {
    padding-top: 0;
  }
}
</style>
