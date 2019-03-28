<template>
<div class="work">
  <section class="hero hero-image work-item is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">

          </h1>
          <h2 class="subtitle">

          </h2>
        </div>
      </div>
    </section>
<section>
  <br>
  <div style="margin: 0px 80px" class="container is-fluid">
  <p class="has-text-left">We do more than simple designs. We are a boutique creative company that strives to create simple, strategic visual solutions through custom design for intentional brands.</p>
  </div>
  <br>
  <h1 class="has-text-centered title brand-title-text"> <b>Select brands we’ve worked with:</b></h1>
  <!--Grid of Clients-->

  <div style="padding: 0px 40px;" class="columns ">
    <div class="column">
      <router-link to="/Tyler-J-McCall">
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by2">
              <img class="image-hover-opacity test image" src="" alt="">
              <div class="middle">
                <span class="text has-text-centered">TYLER J MCCALL</span>
              </div>

            </figure>
          </div>
        </div>
      </router-link>
    </div>

    <div class="column">
      <router-link to="/Travel-Julias-Way">
        <div class="card ">
          <div class="card-image caption-style-1">
            <figure class="image is-3by2">
              <img class="image-hover-opacity julia image" src="" alt="">
              <div class="middle">
                <span class="text has-text-centered">TRAVEL JULIA'S WAY</span>
              </div>
            </figure>
          </div>
        </div>
      </router-link>
    </div>
  </div>

  <div style="padding: 0px 40px;" class="columns ">
    <div class="column">
      <router-link to="/Arise">
        <div class="card ">
          <div class="card-image caption-style-1">
            <figure class="image is-3by2">
              <img class="image-hover-opacity arise image" src="" alt="">
              <div class="middle">
                <span class="text has-text-centered">ARISE</span>
              </div>
            </figure>
          </div>
        </div>
      </router-link>
    </div>

    <div class="column">
      <router-link to="/SalonEtc">
        <div class="card ">
          <div class="card-image caption-style-1">
            <figure class="image is-3by2">
              <img class="image-hover-opacity salon image" src="" alt="">
              <div class="middle">
                <span class="text has-text-centered">SALON ETC</span>
              </div>
            </figure>
          </div>
        </div>
      </router-link>
    </div>
  </div>

  <div id="row4" style="padding: 0px 40px;" class="columns ">
    <div class="column">
      <router-link to="/ChrisSobalvarro">
        <div class="card ">
          <div class="card-image caption-style-1">
            <figure class="image is-3by2">
              <img class="image-hover-opacity chris image" src="" alt="">
              <div class="middle">
                <span class="text has-text-centered">CHRIS SOBALVARRO</span>
              </div>
            </figure>
          </div>
        </div>
      </router-link>
    </div>

    <div class="column">
      <router-link to="/CathyGersonStudios">
        <div class="card ">
          <div class="card-image caption-style-1">
            <figure class="image is-3by2">
              <img class="image-hover-opacity cathy image" src="" alt="">
              <div class="middle">
                <span class="text has-text-centered">CATHY GERSON STUDIOS</span>
              </div>
            </figure>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <br>
  <!--<div id="row3" style="padding: 0px 40px;" class="columns ">-->
    <!--<div class="column">-->
      <!--<router-link to="/Chris">-->
        <!--<div class="card ">-->
          <!--<div class="card-image caption-style-1">-->
            <!--<figure class="image is-3by2">-->
              <!--<img class="image-hover-opacity chris image" src="" alt="">-->
              <!--<div class="middle">-->
                <!--<span class="text has-text-centered">TOPCOAT</span>-->
              <!--</div>-->
            <!--</figure>-->
          <!--</div>-->
        <!--</div>-->
      <!--</router-link>-->
    <!--</div>-->

    <!--<div class="column">-->
      <!--<router-link to="/">-->
        <!--<div class="card ">-->
          <!--<div class="card-image caption-style-1">-->
            <!--<figure class="image is-3by2">-->
              <!--<img class="image-hover-opacity cathy image" src="" alt="">-->
              <!--<div class="middle">-->
                <!--<span class="text has-text-centered">HELIOS WARRIORS</span>-->
              <!--</div>-->
            <!--</figure>-->
          <!--</div>-->
        <!--</div>-->
      <!--</router-link>-->
    <!--</div>-->
  <!--</div>-->
  <br>
</section>
  <backtowork></backtowork>
</div>
</template>
<script>
  import Backtowork from '../components/BackToWork.vue'

  export default {
    components: {Backtowork},
    name: 'Work'
  }
</script>
<style lang="scss" scoped>
.work-item {
  background: url("../../static/img/HP/WORK_hero.png") no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.client1-image {
  background: url("../../static/img/HP/IMG_6393.jpg") center;
}
.client1 {
visibility: hidden;
}
.client1:hover {
  visibility: visible;
}
  .title {
    color: #fff;
  }
.brand-title-text {
 color: grey;
  padding-bottom: 20px;
}
.text-box {
  color: black;
  display: inline-table;
  vertical-align:middle;
  line-height:100%;

}
#wrapper .text-box {
  position:relative;
  bottom:0px;
  left:0px;
  top: 50%;
  visibility:hidden;
}

#wrapper:hover .text-box {
  visibility:visible;

}
  .image-hover-opacity {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .image-hover-opacity:hover {
    opacity: 0.3;
  }

/** Nav Menu */
ul.nav-menu{
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  width: 490px;
  margin: 60px auto;
}
ul.nav-menu li{
  display: inline;
  margin-right: 10px;
  padding:10px;
  border: 1px solid #ddd;
}
ul.nav-menu li a{
  color: #eee;
  text-decoration: none;
  text-transform: uppercase;
}
ul.nav-menu li a:hover, ul.nav-menu li a.active{
  color: #2c3e50;
}
/** content **/
.content{
  margin-top: 100px;
  margin-left: 100px;
  width: 700px;
}
.content h1, .content h2{
  font-family: "Source Sans Pro",sans-serif;
  color: #ecf0f1;
  padding: 0px;
  margin: 0px;
  font-weight: normal;
}
.content h1{
  font-weight: 900;
  font-size: 64px;
}
.content h2{
  font-size:26px;
}
.content p{
  color: #ecf0f1;
  font-family: "Lato";
  line-height: 28px;
  font-size: 15px;
  padding-top: 50px;
}
p.credit{
  padding-top: 20px;
  font-size: 12px;
}
p a{
  color: #ecf0f1;
}
/** fork icon**/
.fork{
  position: absolute;
  top:0px;
  left: 0px;
}
  .test {
    background: url("../../static/img/Coverphotos_Work/longlivesimple-238.jpg") center;
    background-size: cover;
  }
  .julia {
    background: url("../../static/img/HP/TravelJuliasWay.jpg") center;
    background-size: cover;
  }
  .arise {
    background: url("../../static/img/HP/arise-hero.jpg") center;
    background-size: cover;
  }
  .salon {
    background: url("../../static/img/SalonEtcNc/salonetc14.png") center;
    background-size: cover;
  }
  .chris {
    background: url("../../static/img/Coverphotos_Work/Chris_4.png") center;
    background-size: cover;
  }
  .cathy {
    background: url("../../static/img/CathyGersonStudios/Cathy2-06.png") center;
    background-size: cover;
  }
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%)
}

.image:hover {
  opacity: 0.3;
}

.image:hover .middle {
  opacity: 1;
}

.text {
  color: gray;
  font-size: 2em;
  padding: 16px 12px;
  font-family: Montserrat, sans-serif;
}
  .hero-body {
    background-image: none
  }
</style>
