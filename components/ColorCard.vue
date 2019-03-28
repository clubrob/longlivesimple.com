<template>
  <div
    class="card is-shadowless color-card"
    :style="'background-color: ' + bgColor + ';' + ' color: ' + textColor + ';'"
  >
    <div class="card-image">
      <figure class="image color-card-icon">
        <slot></slot>
      </figure>
    </div>
    <div class="card-content color-card-content">
      <div class="content">
        <p class="title is-size-5 color-card-content__title" :style="'color: ' + textColor + ';'">
          {{headlineTextTop}}
          <br>
          {{headlineTextBottom}}
        </p>
        <p class="color-card-content__body">
          {{bodyText}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "headlineTextTop",
    "headlineTextBottom",
    "bodyText",
    "bgColor",
    "textColor"
  ]
};
</script>

<style lang="scss" scoped>
.color-card {
  padding: 40px 50px;
}
.color-card-content__body {
  padding: 0 10px;
}
</style>

