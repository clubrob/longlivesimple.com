<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../../static/img/HP/llslogo.png" alt="Long Live Simple">
      </a>
      <div class="navbar-burger burger center is-hidden-desktop" @click="toggleMenu" :class="{'is-active': navIsActive}"
           data-target="mainNav">
        &#9776;
      </div>
    </div>
    <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
      <div class="navbar-start is-centered">
        <!--Map this to Vue-Router-->
        <router-link to="/Work" class="" tag="div" exact>
          <a class="nav-item is-tab">
            <figure class="image is-32x32" style="margin-right: 2px;">
              <img src="../../static/img/Navigation Icons/icon1.png"
                   onmouseover="this.src='../../static/img/Navigation Icons/icon1_green.png'"
                   onmouseout="this.src='../../static/img/Navigation Icons/icon1.png'">
            </figure>
            <strong>WORK</strong></a>
        </router-link>
        <router-link to="/About" class="" tag="div" exact>
          <a class="nav-item is-tab">
            <figure class="image is-32x32" style="margin-right: 2px;">
              <img src="../../static/img/Navigation Icons/icon2.png"
                   onmouseover="this.src='../../static/img/Navigation Icons/icon2_green.png'"
                   onmouseout="this.src='../../static/img/Navigation Icons/icon2.png'">
            </figure>
            <strong>ABOUT</strong></a>
        </router-link>
        <router-link to="/Services" class="" tag="div" exact>
          <a class="nav-item is-tab">
            <figure class="image is-32x32" style="margin-right: 2px;">
              <img src="../../static/img/Navigation Icons/icon4.png"
                   onmouseover="this.src='../../static/img/Navigation Icons/icon4_green.png'"
                   onmouseout="this.src='../../static/img/Navigation Icons/icon4.png'">

            </figure>
            <strong>SERVICES</strong></a>
        </router-link>
        <router-link to="/Contact" class="" tag="div" exact>
          <a class="nav-item is-tab">
            <figure class="image is-32x32" style="margin-right: 2px;">
              <img src="../../static/img/Navigation Icons/icon3.png"
                   onmouseover="this.src='../../static/img/Navigation Icons/icon3_green.png'"
                   onmouseout="this.src='../../static/img/Navigation Icons/icon3.png'">
            </figure>
            <strong>CONTACT</strong></a>
        </router-link>
        <router-link to="/Blog" class="" tag="div" exact>
          <a class="nav-item is-tab">
            <figure class="image is-32x32" style="margin-right: 2px;">
              <img src="../../static/img/Navigation Icons/icon5.png"
                   onmouseover="this.src='../../static/img/Navigation Icons/blog-29.svg'"
                   onmouseout="this.src='../../static/img/Navigation Icons/icon5.png'">
            </figure>
            <strong>BLOG</strong></a>
        </router-link>
        <router-link to="/Shop" class="" tag="div" exact>
          <a class="nav-item is-tab">
            <figure class="image is-32x32" style="margin-right: 2px;">
              <img src="../../static/img/Navigation Icons/icon6.png"
                   onmouseover="this.src='../../static/img/Navigation Icons/icon6_green.png'"
                   onmouseout="this.src='../../static/img/Navigation Icons/icon6.png'">
            </figure>
            <strong>SHOP</strong></a>
        </router-link>
      </div>
      <!--End of Nav-start-->
      <div class="navbar-end is-hidden-mobile">
        <a href="https://www.instagram.com/longlivesimple" class="nav-item is-tab is-paddingless is-hidden-mobile">
          <figure class="image is-32x32">
            <img src="../../static/img/HP/SocialMediaSVGs/SocialMediaSVGs/social1.svg" alt="Instagram Icon">
          </figure>
        </a>
        <a href="https://www.facebook.com/longlivesimple" class="nav-item is-tab is-paddingless is-hidden-mobile">
          <figure class="image is-32x32">
            <img src="../../static/img/HP/SocialMediaSVGs/SocialMediaSVGs/social2.svg" alt="Facebook Icon">
          </figure>
        </a>
        <a href="https://www.twitter.com/longlivesimple" class="nav-item is-tab is-paddingless is-hidden-mobile">
          <figure class="image is-32x32">
            <img src="../../static/img/HP/SocialMediaSVGs/SocialMediaSVGs/social3.svg" alt="Twitter Icon">
          </figure>
        </a>
        <a href="https://www.pinterest.com/longlivesimple" class="nav-item is-tab is-paddingless is-hidden-mobile">
          <figure class="image is-32x32">
            <img src="../../static/img/HP/SocialMediaSVGs/SocialMediaSVGs/social4.svg" alt="Pinterest Icon">
          </figure>
        </a>
        <a href="https://www.dribbble.com/longlivesimple" class="nav-item is-tab is-paddingless is-hidden-mobile">
          <figure class="image is-32x32">
            <img src="../../static/img/HP/SocialMediaSVGs/SocialMediaSVGs/social5.svg" alt="Dribble Icon">
          </figure>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigationMenu1',
    data () {
      return {
        navIsActive: false
      }
    },
    methods: {
      toggleMenu: function () {
        this.navIsActive = !this.navIsActive
      }
    }
  }
</script>

<style lang="scss" scoped>

  .navbar {
    width: 100%;
    position: fixed;
    background: #fff;
    opacity: .8;
    z-index: 2;
  }

  .nav-item {
    font-family: Montserrat, sans-serif;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a.nav-item.is-tab {
    border-bottom: none transparent;
  }

  a.nav-item.is-tab:hover {
    border-bottom: none transparent;
  }

  .nav-item a:not(.button).is-tab.is-active, a.nav-item:not(.button).is-tab.is-active {
    border-bottom: none transparent;
  }

  strong {
    color: #d3d3d3;
  }

  strong:hover {
    color: #4cc1a1;
  }

  figure:hover {
    color: #1ca64c;
  }

  /*Desktop/Laptop specific tweaks*/
  @media (min-width: 1025px) { /* big landscape tablets, laptops, and desktops */
    .navbar-brand {
      padding-right: 4em;
    }
  }
</style>
