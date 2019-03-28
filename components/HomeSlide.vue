<template>
  <div class="slide-wrap">
    <nuxt-link :to="slideNavUrl">
      <div class="slide__img">
        <figure class="slide__img--figure">
          <img class="slide__img--img" :src="slideImgUrl" :alt="slideImgAlt">
        </figure>
      </div>
      <div class="slide__headline">
        <h2 class="slide__headline--h">
          {{slideHeadline}}
          <i class="mdi mdi-chevron-right"></i>
        </h2>
      </div>
      <div class="slide__caption is-hidden-touch">
        <p class="slide__caption--p">{{slideCaption}}</p>
      </div>
      <div class="slide__overlay"></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "homeslide",
  props: [
    "slideNavUrl",
    "slideImgUrl",
    "slideImgAlt",
    "slideHeadline",
    "slideCaption"
  ]
};
</script>

<style lang="scss" scoped>
.slide-wrap {
  position: relative;
}
.slide__img--figure {
  padding: 0;
  margin: 0;
}
.slide__img--img {
  display: block;
  width: 100%;
  height: auto;
}
.slide__headline,
.slide__caption,
.slide__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.slide__headline {
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}
.slide__headline--h {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  transition: color 100ms ease-in-out;
}
@media screen and (min-width: 768px) {
  .slide__headline--h {
    font-size: 34px;
  }
}
@media screen and (min-width: 1088px) {
  .slide__headline--h {
    font-size: 48px;
  }
}
@media screen and (min-width: 1407px) {
  .slide__headline--h {
    font-size: 68px;
  }
}
.slide__caption {
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.slide__caption--p {
  color: #fff;
  width: 100%;
  padding: 1rem 15%;
  background-color: rgba(255, 255, 255, 0.15);
  text-align: left;
  font-family: "Karla", sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.slide__overlay {
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

