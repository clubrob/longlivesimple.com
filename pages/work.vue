<template>
  <div>
    <section class="section is-paddingless">
      <page-banner :pageTitle="workBanner.text" :pageImgUrl="workBanner.image">
        <svg
          class="banner-icon"
          width="133"
          height="216"
          viewBox="0 0 133 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M64.7275 20.6757L71.8278 2.45151C72.442 0.917202 73.6694 0 75.5114 0C77.353 0 78.5809 1.22578 79.195 2.76009L85.813 21.668L88.4034 21.793L85.8697 79.8175L105.593 39.9004H105.775C104.134 37.5489 103.137 34.5678 103.137 31.3074C103.137 24.2488 108.663 14.4258 115.416 13.1959C121.863 11.9701 122.784 9.51439 123.088 8.28444C123.397 7.67155 123.705 6.44577 124.931 5.82871L126.161 5.52435L127.387 6.13723C132.911 8.59296 133.833 19.6417 130.151 31.616C128.479 36.2064 125.106 40.801 121.089 43.2692L105.16 81.9564H124.318V174.657L73.3625 211.489C70.2931 213.945 66.3026 215.175 62.3122 215.175C58.3217 215.175 54.3313 213.945 50.955 211.185L0 172.814V81.9564H17.0163L7.67406 14.4258C7.3672 11.3572 9.51563 8.2844 12.5855 7.98004L40.5183 3.99002C42.053 3.68149 43.5877 4.29436 44.8156 5.21578C46.0435 6.1372 46.9645 7.67154 46.9645 9.20585L48.1923 17.4945L56.9463 81.9564H59.6546L62.3122 20.5631L64.7275 20.6757ZM109.584 96.6907H15.0408V165.447L60.1637 199.827C61.6985 201.053 63.54 201.053 65.0748 199.827L109.584 167.29V96.6907ZM42.3878 14.9678L41.7462 10.1273L13.1992 13.8088C13.1992 13.8088 12.8924 13.8088 12.8924 14.1173L22.378 81.9564H40.0588L39.456 77.6328L50.4884 76.0943L49.1893 66.2881L37.91 67.8599L37.147 62.3897L48.4634 60.8096L47.1642 51.0075L35.9016 52.5793L35.1386 47.105L46.4379 45.529L45.1383 35.7227L33.897 37.2904L33.1336 31.8203L44.4124 30.2484L43.1137 20.4463L31.5914 22.0515L30.8284 16.5814L42.3878 14.9678ZM48.4554 81.9564H51.2656L51.2147 81.5686L48.4554 81.9564ZM64.9664 81.9564H80.0222L82.5688 27.063L75.9909 26.742L67.5305 26.396L64.9664 81.9564ZM99.1953 81.9564L114.188 45.4289H109.277L91.0125 81.9564H99.1953ZM126.466 13.8088C124.623 15.9602 121.863 17.803 116.643 18.7202C113.267 19.3373 108.969 26.396 108.969 31.3074C108.969 35.9104 111.732 39.5961 115.416 39.5961C118.792 39.5961 123.397 34.9889 124.931 29.7731C127.078 22.4059 127.078 16.8816 126.466 13.8088ZM70.6 20.8716L79.8088 21.176L75.5114 8.59297L70.6 20.8716Z"
            fill="#ffffff"
          ></path>
        </svg>
      </page-banner>
    </section>
    <section class="section work-section">
      <div class="container">
        <div class="content">
          <p
            class="has-text-left is-size-5"
          >We do more than simple designs. We are a boutique creative company that strives to create simple, strategic visual solutions through custom design for intentional brands.</p>
        </div>

        <h1 class="has-text-centered has-text-left-mobile title">
          Select brands we’ve worked with:
        </h1>
        <!--Grid of Clients-->
        <div class="columns">
          <div class="column">
            <hover-card
              :cardText="tylerCard.text"
              :cardUrl="tylerCard.route"
              :cardImgUrl="tylerCard.image"
            ></hover-card>
          </div>

          <div class="column">
            <hover-card
              :cardText="juliaCard.text"
              :cardUrl="juliaCard.route"
              :cardImgUrl="juliaCard.image"
            ></hover-card>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <hover-card
              :cardText="ariseCard.text"
              :cardUrl="ariseCard.route"
              :cardImgUrl="ariseCard.image"
            ></hover-card>
          </div>

          <div class="column">
            <hover-card
              :cardText="salonCard.text"
              :cardUrl="salonCard.route"
              :cardImgUrl="salonCard.image"
            ></hover-card>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <hover-card
              :cardText="chrisCard.text"
              :cardUrl="chrisCard.route"
              :cardImgUrl="chrisCard.image"
            ></hover-card>
          </div>

          <div class="column">
            <hover-card
              :cardText="cathyCard.text"
              :cardUrl="cathyCard.route"
              :cardImgUrl="cathyCard.image"
            ></hover-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HoverCard from "../components/HoverCard";
import PageBanner from "../components/PageBanner";
export default {
  name: "work",
  components: { HoverCard, PageBanner },
  data: function() {
    return {
      workBanner: {
        text: "Work",
        image: "/img/work/work-banner.jpg"
      },
      tylerCard: {
        route: "/tyler-j-mccall",
        text: "Tyler J. McCall",
        image: "/img/work/tyler-cover.jpg"
      },
      juliaCard: {
        route: "/travel-julias-way",
        text: "Travel Julia's Way",
        image: "/img/work/julia-cover.jpg"
      },
      ariseCard: {
        route: "/arise",
        text: "Arise",
        image: "/img/work/arise-cover.jpg"
      },
      salonCard: {
        route: "/salon-etc",
        text: "Salon Etc",
        image: "/img/work/salon-cover.jpg"
      },
      chrisCard: {
        route: "/chris-sobalvarro",
        text: "Chris Sobalvarro",
        image: "/img/work/chris-cover.jpg"
      },
      cathyCard: {
        route: "/cathy-gerson-studios",
        text: "Cathy Gerson Studios",
        image: "/img/work/cathy-cover.jpg"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.banner-icon {
  height: 44px;
  width: auto;
  padding-right: 20px;
}
@media screen and (min-width: 1088px) {
  .banner-icon {
    height: 68px;
  }
}
.title {
  color: #808080;
}
</style>
