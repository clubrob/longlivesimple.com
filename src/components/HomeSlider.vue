<template>
  <!-- <swiper :options="swiperOption" ref="mySwiper"> -->
    <!-- slides -->
    <!-- <swiper-slide>
      <router-link to="/Contact"><img src="../../static/img/HP/hero2.svg" alt="Hero1"></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Work"><img src="../../static/img/HP/hero2.svg" alt="Hero2"></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Tyler-J-McCall"><img src="../../static/img/HP/hero3.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Services"><img src="../../static/img/HP/hero4.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Shop"><img src="../../static/img/HP/hero5.svg" alt=""></router-link>
    </swiper-slide>
    <swiper-slide>
      <router-link to="/Contact"><img src="../../static/img/HP/hero6.svg" alt=""></router-link>
    </swiper-slide>
  </swiper> -->
  <carousel :autoplay="true" :perPage="1" paginationActiveColor="transparent" paginationColor="transparent">
    <slide>
      <router-link to="/Contact"><img src="../../static/img/HP/hero1.svg" alt="Hero1"></router-link>
    </slide>
    <slide>
      <router-link to="/Work"><img src="../../static/img/HP/hero2.svg" alt="Hero2"></router-link>
    </slide>
    <slide>
      <router-link to="/Tyler-J-McCall"><img src="../../static/img/HP/hero3.svg" alt="Hero3"></router-link>
    </slide>
    <slide>
      <router-link to="/Services"><img src="../../static/img/HP/hero4.svg" alt="Hero4"></router-link>
    </slide>
    <slide>
      <router-link to="/Shop"><img src="../../static/img/HP/hero5.svg" alt="Hero5"></router-link>
    </slide>
    <slide>
      <router-link to="/Contact"><img src="../../static/img/HP/hero6.svg" alt="Hero6"></router-link>
    </slide>
  </carousel>
</template>

<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'homeslider',
  components: {
    swiper,
    swiperSlide,
    Carousel,
    Slide
  },
  data () {
    return {
      swiperOption: {
        preloadImages: true,
        lazyLoading: true,
        autoplay: 5000,
        setWrapperSize: true,
        autoHeight: true
      }
    }
  }
}
</script>

<style>

</style>
