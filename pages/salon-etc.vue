<template>
  <div>
    <section class="section is-paddingless">
      <portfolio-banner
        :portfolioTitle="salonBanner.title"
        :portfolioImgUrl="salonBanner.image"
        :portfolioSubtitle="salonBanner.subtitle"
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
              >A full-service salon located in Gastonia, North Carolina. Salon Etc. specializes in organic hair, skin and nail treatments.</p>
              <p>
                <img src="/img/work/salon-etc/salonetc2.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/salon-etc/salonetc3.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Final brand sub-mark and social media symbol for our client Salon Etc. A modern set of shapes that complements their logo, this icon set represents the three aspects of their business: hair, skin, and nails.</p>
              <p>
                <img src="/img/work/salon-etc/salonetc4.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >This talented group of women entrepreneurs do just about anything beauty-related you can think of (hence the “etc.” emphasis) and have extensive training in all types of hair techniques, including advanced cutting and coloring.</p>
              <p>
                <img src="/img/work/salon-etc/salonetc5.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/salon-etc/salonetc6.jpg" alt="Client Image">
              </p>
              <p class="inset-p has-text-left">
                The salon features organic products, creating a whole-body balance and rejuvenating spa experience. We worked with the owner, Sheila, to create these stylish mini product punch cards.
                We worked with our client, Sheila of Salon Etc., to create this “Scandinavian meets Art Deco”–inspired type that represents the bright, stylish interior of her salon. To reflect her artistic style and to complement the bold lettering of the logo, we chose to use vibrant red, blue, and yellow primary accent lines.
              </p>
              <p>
                <img src="/img/work/salon-etc/salonetc7.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/salon-etc/salonetc8.jpg" alt="Client Image">
              </p>
              <p class="inset-p has-text-left">
                The salon features organic products, creating a whole-body balance and rejuvenating spa experience. We worked with the owner, Sheila, to create these stylish mini product punch cards.
                We worked with our client, Sheila of Salon Etc., to create this “Scandinavian meets Art Deco”–inspired type that represents the bright, stylish interior of her salon. To reflect her artistic style and to complement the bold lettering of the logo, we chose to use vibrant red, blue, and yellow primary accent lines.
              </p>
              <p>
                <img src="/img/work/salon-etc/salonetc9.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >Mini menu design for Salon Etc. Uniquely crafted to fit nicely into a picket or bag, these beauty menus feature the salon’s services, contact info, coupons and more.</p>

              <p>
                <img src="/img/work/salon-etc/salonetc10.jpg" alt="Client Image">
              </p>
              <p>
                <img src="/img/work/salon-etc/salonetc11.jpg" alt="Client Image">
              </p>
              <p
                class="inset-p has-text-left"
              >We worked with Sheila of Salon Etc. and developer Anthony Garera to create Sheila’s website, www.salonetcnc.com.</p>
              <p>
                <img src="/img/work/salon-etc/salonetc12.jpg" alt="Client Image">
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
  name: "Salon Etc.",
  data: function() {
    return {
      salonBanner: {
        title: "SalonEtc",
        subtitle:
          "Logo, Branding, Business Cards, Website Design, Newsletter Header",
        image: "/img/work/salon-etc/salon-banner.jpg"
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
