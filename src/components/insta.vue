<!--Instagram Vue-->
<template>
  <vue-instagram token="31630898.125d84c.a43865487e724917afd940c7add7f48e" username="anthonygarera" :count="5">
    <template slot="feeds" scope="props">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide><img v-bind:src="props.feed.images.low_resolution.url" alt=""> </swiper-slide>
      </swiper>
    </template>
    <template slot="error" scope="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import VueInstagram from 'vue-instagram'

  export default {
    name: 'insta',
    components: {
      VueInstagram,
      swiper,
      swiperSlide },
    data () {
      return {
        swiperOption: {
          preloadImages: false,
          lazyLoading: true,
          autoplay: 5000
        }
      }
    }
  }
  </script>
<style> </style>

