<template>
  <div>
    <section class="section is-paddingless">
      <portfolio-banner
        :portfolioTitle="tylerBanner.title"
        :portfolioImgUrl="tylerBanner.image"
        :portfolioSubtitle="tylerBanner.subtitle"
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
              >An Instagram marketing expert, Tyler simplifies Instagram for entrepreneurs and creatives.</p>
              <p>
                <img src="/img/work/tyler/tyler2-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Tyler’s board is organic with geometric shapes. Camel/taupe with shades of blue and grays with bright tones set the mood for Tyler’s new branding.</p>
              <p>
                <img src="/img/work/tyler/tyler3-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/tyler/tyler4-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We worked with Tyler to create a custom brand identity that not only represents his work but also reflects his personality and passion for helping other entrepreneurs and businesses.</p>
              <p>
                <img src="/img/work/tyler/tyler5-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/tyler/tyler6-06.jpg" alt="Client Image">
              </p>

              <p>
                <img src="/img/work/tyler/tyler7-06.jpg" alt="Client Image">
              </p>

              <p>
                <img src="/img/work/tyler/tyler8-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Tyler chose our Simple Branding Package and wanted a modern, organic, yet timeless style, so we created a hashtag brand symbol that speaks for itself. To Tyler, Instagram is about creating an online community. We’ve helped him convey his Instagram expertise while subtly highlighting the interconnectivity that Instagram provides.</p>
              <p>
                <img src="/img/work/tyler/tyler9-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/tyler/tyler10-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >This custom icon set helps categorize Tyler’s Instagram talks and his services. We created these icons to portray his brand personality. Zoom in to see an icon of Tyler himself.</p>
              <p>
                <img src="/img/work/tyler/tyler11-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/tyler/tyler12-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We worked with Tyler to create this geometric, Art Deco–inspired logo that symbolizes his work. There’s much thought and intention behind his brand typography and modern brand mark. The double lines create logo depth.</p>
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
  name: "TylerJMcCall",
  components: { Backtowork, PortfolioBanner },
  data: function() {
    return {
      tylerBanner: {
        title: "Tyler J. McCall",
        subtitle: "Logo, Branding",
        image: "/img/work/tyler/tyler-banner.jpg"
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
