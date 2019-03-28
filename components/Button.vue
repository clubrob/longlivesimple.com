<template>
  <div>
    <button v-if="isButton" :type="buttonType" :class="buttonStyle + ' button-button'">
      {{buttonText}}
      <i class="mdi mdi-chevron-right"></i>
    </button>
    <nuxt-link v-if="!isButton" :to="buttonUrl" :class="buttonStyle + ' link-button'">
      {{buttonText}}
      <i class="mdi mdi-chevron-right"></i>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['isButton', 'buttonText', 'buttonUrl', 'buttonStyle', 'buttonType']
};
</script>

<style lang="scss" scoped>
.link-button, .button-button {
  display: inline-block;
  padding: 17px;
  font-family: "Karla", sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.button-button {
  background-color: transparent;
}
.link-button.positive, .button-button.positive {
  border: 1px solid #d3d3d3;
  color: rgb(76, 191, 160);
}
.link-button.positive:hover, .button-button.positive:hover {
  border-color: #808080;
  background-color: #808080;
  color: #fff;
}
.link-button.negative, .button-button.negative {
  border: 1px solid #fff;
  color: #fff;
}
.link-button.negative:hover, .button-button.negative:hover {
  background-color: #fff;
  color: rgb(76, 191, 160);
}
</style>
