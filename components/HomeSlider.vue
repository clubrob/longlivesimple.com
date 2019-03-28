<template>
  <no-ssr>
    <carousel
      :autoplay="true"
      :perPage="1"
      :autoplayTimeout="3000"
      :loop="true"
      paginationActiveColor="#4cc1a1"
      paginationColor="#d3d3d3"
    >
      <slide v-for="slide in slides" :key="slide.id" :title="slide.headline">
        <home-slide
          :slideNavUrl="slide.route"
          :slideImgUrl="slide.imgUrl"
          :slideImgAlt="slide.imgAlt"
          :slideHeadline="slide.headline"
          :slideCaption="slide.caption"
        ></home-slide>
      </slide>
    </carousel>
  </no-ssr>
</template>

<script>
import homeSlide from "./HomeSlide";

export default {
  name: "homeslider",
  components: {
    homeSlide: homeSlide
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          route: "/contact",
          imgUrl: "/img/index/slides/brand-story.jpg",
          imgAlt: "Tell us your brand story",
          headline: "Tell us your brand story",
          caption:
            "We empower our clients to help them find their brand identity and visually communicate their story in unique, compelling, and strategic ways."
        },
        {
          id: 2,
          route: "/work",
          imgUrl: "/img/index/slides/our-work.jpg",
          imgAlt: "See our work",
          headline: "See our work",
          caption:
            "We help transform your ideas through design that makes your vision come alive. Our design process uses customization and simplicity to make brands stand out."
        },
        {
          id: 3,
          route: "/tyler-j-mccall",
          imgUrl: "/img/index/slides/tyler.jpg",
          imgAlt: "See Tyler J. McCall's brand story",
          headline: "See Tyler J. McCall's brand story",
          caption:
            "Featured Client Work: We recently worked with Tyler J. McCall, local Instagram expert for entrepreneurs and creatives. Follow the link to see Tyler’s new brand identity."
        },
        {
          id: 4,
          route: "/services",
          imgUrl: "/img/index/slides/services.jpg",
          imgAlt: "Let's make your brand hopes a reality",
          headline: "Let's make your brand hopes a reality",
          caption:
            "We’re innovative people helping entrepreneurs and businesses craft unforgettable brands."
        },
        {
          id: 5,
          route: "/contact",
          imgUrl: "/img/index/slides/connect.jpg",
          imgAlt: "Let's connect",
          headline: "Let's connect",
          caption:
            "Above all, we believe a brand should reflect the talent and intention behind what you do, and we create thoughtful solutions for our clients."
        }
      ]
    };
  }
};
</script>

<style scoped>
.VueCarousel-wrapper {
  margin-bottom: -20px;
}
</style>

