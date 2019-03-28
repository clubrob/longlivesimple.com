<template>
  <div>
    <section class="section is-paddingless">
      <portfolio-banner
        :portfolioTitle="juliaBanner.title"
        :portfolioImgUrl="juliaBanner.image"
        :portfolioSubtitle="juliaBanner.subtitle"
      ></portfolio-banner>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-quarters">
            <div class="content">
              <p
                class="is-size-5 has-text-weight-bold has-text-left has-text-centered-desktop"
              >Julia is an entrepreneur, blogger, and travel consultant living in North Carolina.</p>
              <p>
                <img src="/img/work/julia/longlivesimple-312.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Julia’s hand-drawn logo conveys a sense of travel-meets-luxury, and the logo as a whole reflects her personality and stands for the personalized travel experience she creates for each client.</p>
              <p>
                <img src="/img/work/julia/longlivesimple-338.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/julia/longlivesimple-325.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We created these personalized business cards for Julia, featuring her logo mark, map, contact information, and custom icon set.</p>
              <p>
                <img src="/img/work/julia/longlivesimple-329.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >With the help of developer Anthony Garera, we crafted a fully customized website experience for our client Travel Julia’s Way. Julia’s new website, www.traveljuliasway.com, features Julia’s Destinations, Stories from the Road, Testimonials, Upcoming Trips and more.</p>
              <p>
                <img src="/img/work/julia/longlivesimple-423.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/julia/longlivesimple-456.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/julia/longlivesimple-451.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We used user experience practices to craft Julia an interactive site that showcases her main navigation using a custom created icon set. If you’d like to learn more about Julia and her story, visit her About page here.</p>
              <p>
                <img src="/img/work/julia/IconDesign.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/julia/longlivesimple-438.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/julia/longlivesimple-437.jpg" alt="Client Image">
              </p>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
    <backtowork></backtowork>
  </div>
</template>
<script>
import Backtowork from "../components/BackToWork";
import PortfolioBanner from "../components/PortfolioBanner";

export default {
  components: { Backtowork, PortfolioBanner },
  name: "TravelJuliasWay",
  data: function() {
    return {
      juliaBanner: {
        title: "Travel Julia's Way",
        subtitle:
          "Logo, Branding, Business Cards, Website Design, Newsletter Header",
        image: "/img/work/julia/julia-banner.jpg"
      }
    };
  }
};
</script>
<style scoped>
.inset-p {
  padding: 20px 50px;
}
p {
  color: gray;
}
img {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
</style>
