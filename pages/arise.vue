<template>
  <div>
    <section class="section is-paddingless">
      <portfolio-banner
        :portfolioTitle="ariseBanner.title"
        :portfolioImgUrl="ariseBanner.image"
        :portfolioSubtitle="ariseBanner.subtitle"
      ></portfolio-banner>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-quarters">
            <div class="content">
              <p class="is-size-5 has-text-weight-bold has-text-left has-text-centered-desktop">
                <a href="https://www.arise.com">Arise&#8482; Virtual Solutions</a> is a customer service support company in Miramar, Florida.
              </p>
              <p>
                <img src="/img/work/arise/Arise-08.jpg" alt="Client Image">
              </p>
              <p class="inset-p has-text-left">
                We worked with the Arise &#8482; team based in Charlotte, North Carolina to update and reformat their flyers,
                all based off of their new brand guidelines. We created a series of 3 flyers,
                reinventing the way the information is communicated through user experience-based solutions.
              </p>
              <p>
                <img src="/img/work/arise/Arise_3-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/arise/Arise_4-06.jpg" alt="Client Image">
              </p>
              <p class="inset-p has-text-left">
                Several other concepts for the social media banners made for Arise(TM) Virtual Solutions.
                Clean and minimal in design, these social media banners helped set the stage for the Arise(TM) rebranding.
              </p>
              <p>
                <img src="/img/work/arise/Arise_5-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/arise/Arise_6-06.jpg" alt="Client Image">
              </p>

              <p>
                <img src="/img/work/arise/Arise_replace.jpg" alt="Client Image">
              </p>

              <p>
                <img src="/img/work/arise/Arise_9-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We worked with the team to create a series of email campaign headers that mirror their social media banners.</p>

              <p>
                <img src="/img/work/arise/Arise2_replace.jpg" alt="Client Image">
              </p>

              <p>
                <img src="/img/work/arise/Arise_11-06.jpg" alt="Client Image">
              </p>
              <p class="inset-p has-text-left">
                All work done for Arise(TM) Virtual Solutions was based off their newly created brand guide and brand standards.
                All work and flyers shown are copyright Arise(TM) Virtual Solutions.
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
  name: "Arise",
  data: function() {
    return {
      ariseBanner: {
        title: "Arise Virtual Solutions",
        subtitle: "Collateral, Email Header Design, Social Media",
        image: "/img/work/arise/arise-banner.jpg"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
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
