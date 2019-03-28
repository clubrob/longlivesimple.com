<template>
  <nuxt-link :to="cardUrl">
    <div class="hover-card card">
      <div class="card-image">
        <figure class="is-3by2">
          <img class="card-image__image" :src="cardImgUrl" :alt="cardText">
          <figcaption class="hover-card__caption has-text-centered">{{cardText}}</figcaption>
        </figure>
      </div>
      <div class="hover-card__overlay"></div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: ["cardUrl", "cardText", "cardImgUrl"]
};
</script>
<style lang="scss" scoped>
.hover-card {
  position: relative;
}
.hover-card:hover .hover-card__caption,
.hover-card:hover .hover-card__overlay {
  opacity: 1;
}
.hover-card__caption {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #707070;
  font-size: 2em;
  padding: 16px 12px;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  opacity: 0;
  z-index: 2;
  transition: opacity 150ms ease;
}
.hover-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: opacity 150ms ease;
  z-index: 1;
}
.card-image__image {
  display: block;
}
</style>
