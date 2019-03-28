<template>
  <div>
    <section class="section is-paddingless">
      <portfolio-banner
        :portfolioTitle="chrisBanner.title"
        :portfolioImgUrl="chrisBanner.image"
        :portfolioSubtitle="chrisBanner.subtitle"
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
              >Local Asheville artist and painter Chris has a distinct style taking his viewers on a journey that reflects his experiences.</p>
              <p>
                <img src="/img/work/chris/Chris_2.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >As a creative company that enjoys supporting local artists and makers, we were thrilled to design IPaintWay’s new brand identity. Chris wanted us to recreate his signature in digital form, and his unique logo mark represents his distinct style, inspired by his love of tattoos and Pop Art.</p>
              <p>
                <img src="/img/work/chris/Chris_3.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/chris/Chris_4.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/chris/Chris_5.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We helped Chris design his stylish business card set—a.k.a. his mini portfolio—featuring 8 of his designs plus his original handwritten signature in digital form.</p>
              <p>
                <img src="/img/work/chris/Chris_6.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/chris/Chris_7.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/chris/Chris_8.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Chris also worked with us as we photographed a series of his paintings for his brand images. He mostly draws animals and plants but also offers custom illustration and paintings.</p>
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
  name: "ChrisSobalvarro",
  data: function() {
    return {
      chrisBanner: {
        title: "Chris Sobalvarro",
        subtitle: "",
        image: "/img/work/chris/chris-banner.jpg"
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
