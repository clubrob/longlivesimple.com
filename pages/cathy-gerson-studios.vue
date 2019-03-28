<template>
  <div>
    <section class="section is-paddingless">
      <portfolio-banner
        :portfolioTitle="cathyBanner.title"
        :portfolioImgUrl="cathyBanner.image"
        :portfolioSubtitle="cathyBanner.subtitle"
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
              >Cathy Gerson is a talented local ceramic artist specializing in architectural and handcrafted tiles.</p>
              <p>
                <img src="/img/work/cathy/Cathy2-06-2.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >She runs an innovative ceramic studio where textures, metals, and clay are combined to create stunning classic automotive, decorative, and versatile clay works.</p>
              <p>
                <img src="/img/work/cathy/Cathy3-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/cathy/Cathy4-06-2.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/cathy/Cathy5-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Cathy’s logo was inspired by her classic car installations. We were honored to help her craft her new brand using her original signature she inscribes into her clay works.</p>
              <p>
                <img src="/img/work/cathy/Cathy6-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/cathy/Cathy7-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/cathy/Cathy8-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >As these clay totems show, Cathy adds mica and natural stones from the mountain stream behind her home studio to many of her glazed sculptures.</p>
              <p>
                <img src="/img/work/cathy/Cathy9-06.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/cathy/Cathy10-06.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Closeup of Cathy’s classic motorcycle creations from clay.</p>
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
  name: "CathyGersonStudios",
  data: function() {
    return {
      cathyBanner: {
        title: "Cathy Gerson Studios",
        subtitle: "",
        image: "/img/work/cathy/cathy-banner.jpg"
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
