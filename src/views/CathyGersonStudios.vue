<template>
  <div id="Cathy">
    <section class="hero is-large">
      <div class="hero-body aris-hero">
      <h1 style="color: white" class="title is-spaced header-font"><b>CATHY GERSON STUDIOS </b></h1>
        <h2 style="color: white" class="subtitle is-4 body-font">Cathy Gerson is a talented local ceramic artist specializing in architectural and handcrafted tiles. </h2>
      </div>
    </section>
    <section>
      <div style="margin: 0px 80px" class="container is-fluid">
        <p style="padding: 60px 0px;" class="header-font"><b>Cathy Gerson is a talented local ceramic artist specializing in architectural and handcrafted tiles. </b>
        </p>
        <!--Client Images-->
        <!--<img src="../../static/img/HP/tyler1-06.png" alt="Client Image">-->
        <img src="../../static/img/CathyGersonStudios/Cathy2-06-2.png" alt="Client Image">
        <p class="content-padding has-text-left">
          She runs an innovative ceramic studio where textures, metals, and clay are combined to create stunning classic automotive, decorative, and versatile clay works.</p>
        <img src="../../static/img/CathyGersonStudios/Cathy3-06.png" alt="Client Image">
        <img src="../../static/img/CathyGersonStudios/Cathy4-06-2.png" alt="Client Image">
        <p class="content-padding has-text-left">
        </p>
        <img src="../../static/img/CathyGersonStudios/Cathy5-06.png" alt="Client Image">
        <p class="content-padding has-text-left">
          Cathy’s logo was inspired by her classic car installations. We were honored to help her craft her new brand using her original signature she inscribes into her clay works.
        </p>
        <img src="../../static/img/CathyGersonStudios/Cathy6-06.png" alt="Client Image">
        <img src="../../static/img/CathyGersonStudios/Cathy7-06.png" alt="Client Image">
        <img src="../../static/img/CathyGersonStudios/Cathy8-06.png" alt="Client Image">
        <p class="content-padding has-text-left">
          As these clay totems show, Cathy adds mica and natural stones from the mountain stream behind her home studio to many of her glazed sculptures.
        </p>
        <img src="../../static/img/CathyGersonStudios/Cathy9-06.png" alt="Client Image">
        <img src="../../static/img/CathyGersonStudios/Cathy10-06.png" alt="Client Image">
        <p class="content-padding has-text-left">
          Closeup of Cathy’s classic motorcycle creations from clay.
        </p>
      </div>
    </section>
    <backtowork></backtowork>
  </div>
</template>
<script>
  import Backtowork from '../components/BackToWork.vue'

  export default {
    components: {Backtowork},
    name: 'CathyGersonStudios'
  }
</script>
<style scoped>
  .aris-hero {
    background: url("../../static/img/CathyGersonStudios/Cathy5-06-2.png");
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
