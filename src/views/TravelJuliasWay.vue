<template>
  <div id="Julia">
    <section class="hero is-large">
      <div class="hero-body aris-hero">
      <h1 style="color: white" class="title is-spaced header-font"><b>TRAVEL JULIA'S WAY</b></h1>
        <h2 style="color: white" class="subtitle is-4 body-font">Logo, Branding, Business Cards, Website Design, Newsletter Header</h2>
      </div>
    </section>
    <section>
      <div style="margin: 0px 80px" class="container is-fluid">
        <p style="padding: 60px 0px;" class="header-font"><b>Julia is an entrepreneur, blogger, and travel consultant living in North Carolina.</b>
        </p>
        <!--Client Images-->
        <!--<img src="../../static/img/HP/tyler1-06.png" alt="Client Image">-->
        <img src="../../static/img/Julia/longlivesimple-312.jpg" alt="Client Image">
        <p class="content-padding has-text-left">
          Julia’s hand-drawn logo conveys a sense of travel-meets-luxury, and the logo as a whole reflects her personality and stands for the personalized travel experience she creates for each client.</p>
        <img src="../../static/img/Julia/longlivesimple-338.jpg" alt="Client Image">
        <img src="../../static/img/Julia/longlivesimple-325.jpg" alt="Client Image">
        <p class="content-padding has-text-left">
          We created these personalized business cards for Julia, featuring her logo mark, map, contact information, and custom icon set.
        </p>
        <img src="../../static/img/Julia/longlivesimple-329.jpg" alt="Client Image">
        <p class="content-padding has-text-left">
          With the help of developer Anthony Garera, we crafted a fully customized website experience for our client Travel Julia’s Way. Julia’s new website, www.traveljuliasway.com, features Julia’s Destinations, Stories from the Road, Testimonials, Upcoming Trips and more.
        </p>
        <img src="../../static/img/Julia/longlivesimple-423.jpg" alt="Client Image">
        <img src="../../static/img/Julia/longlivesimple-456.jpg" alt="Client Image">
        <img src="../../static/img/Julia/longlivesimple-451.jpg" alt="Client Image">
        <p class="content-padding has-text-left">
          We used user experience practices to craft Julia an interactive site that showcases her main navigation using a custom created icon set. If you’d like to learn more about Julia and her story, visit her About page here.
        </p>
        <img src="../../static/img/Julia/IconDesign.png" alt="Client Image">
        <img src="../../static/img/Julia/longlivesimple-438.jpg" alt="Client Image">
        <img src="../../static/img/Julia/longlivesimple-437.jpg" alt="Client Image">
      </div>
    </section>
    <backtowork></backtowork>
  </div>
</template>
<script>
  import Backtowork from '../components/BackToWork.vue'

  export default {
    components: {Backtowork},
    name: 'TravelJuliasWay'
  }
</script>
<style scoped>
  .aris-hero {
    background: url("../../static/img/Julia/longlivesimple-437.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
white-text{
  color: #fff;
}
  .is-fluid {
    margin: 0px 80px;
  }

  .content-padding {
    padding: 30px 0px;
  }

  .header-font {
    font-family: 'Montserrat', sans-serif;
  }
  .body-font {
    font-family: 'Karla', sans-serif;
  }
</style>
