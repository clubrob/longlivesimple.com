<template>
  <div class="page-banner" :style="'background-image: url(' + pageImgUrl + ');'">
    <h1 class="page-banner__title">
      <slot></slot>
      {{pageTitle}}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["pageTitle", "pageImgUrl"]
};
</script>

<style lang="scss" scoped>
.page-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 300px;
}
.page-banner__title {
  display: flex;
  align-items: center;
  padding-top: 0;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 44px;
  font-weight: 800;
  text-transform: uppercase;
}
@media screen and (min-width: 1088px) {
  .page-banner__title {
    padding-top: 50px;
    font-size: 58px;
  }
}
</style>

