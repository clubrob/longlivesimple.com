<template>
  <div id="Chris">
    <section class="hero is-large">
      <div class="hero-body aris-hero">
      <h1 style="color: white" class="title is-spaced header-font"><b>CHRIS SOBALVARRO</b></h1>
        <h2 style="color: white" class="subtitle is-4 body-font"></h2>
      </div>
    </section>
    <section>
      <div style="margin: 0px 80px" class="container is-fluid">
        <p style="padding: 60px 0px;" class="header-font"><b>Local Asheville artist and painter Chris has a distinct style taking his viewers on  a journey that reflects his experiences. </b>
        </p>
        <!--Client Images-->
        <!--<img src="../../static/img/HP/tyler1-06.png" alt="Client Image">-->
        <img src="../../static/img/Chris/Chris_2.png" alt="Client Image">
        <p class="content-padding has-text-left">
          As a creative company that enjoys supporting local artists and makers, we were thrilled to design IPaintWay’s new brand identity. Chris wanted us to recreate his signature in digital form,  and his unique logo mark represents his distinct style, inspired by his love of tattoos and Pop Art. </p>
        <img src="../../static/img/Chris/Chris_3.png" alt="Client Image">
        <img src="../../static/img/Chris/Chris_4.png" alt="Client Image">
        <p class="content-padding has-text-left">
        </p>
        <img src="../../static/img/Chris/Chris_5.png" alt="Client Image">
        <p class="content-padding has-text-left">
          We helped Chris design his stylish business card set—a.k.a. his mini portfolio—featuring 8 of his designs plus his original handwritten signature in digital form.
        </p>
        <img src="../../static/img/Chris/Chris_6.png" alt="Client Image">
        <img src="../../static/img/Chris/Chris_7.png" alt="Client Image">
        <img src="../../static/img/Chris/Chris_8.png" alt="Client Image">
        <p class="content-padding has-text-left">
          Chris also worked with us as we photographed a series of his paintings for his brand images. He mostly draws animals and plants but also offers custom illustration and paintings.
        </p>
        <p class="content-padding has-text-left">

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
    name: 'ChrisSobalvarro'
  }
</script>
<style scoped>
  .aris-hero {
    background: url("../../static/img/Chris/Chris_1-06.png");
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
