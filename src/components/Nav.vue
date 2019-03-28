<template>
  <nav id="top" class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
        &#9776;
      </div>
      <a href="/" class="nav-item">
        <!--style="max-height: 2.75em" for Image-->
        <img src="../../static/img/HP/llslogo.png" alt="Bulma logo">
      </a>

    </div>
    <div class="navbar-start">
      <!--Map this to Vue-Router-->
      <router-link to="/Work" class="" tag="div" exact>
        <a class="nav-item is-tab is-hidden-mobile">
          <figure class="image is-32x32" style="margin-right: 2px;">
            <img src="../../static/img/Navigation Icons/icon1.png"
                 onmouseover="this.src='../../static/img/Navigation Icons/icon1_green.png'"
                 onmouseout="this.src='../../static/img/Navigation Icons/icon1.png'">
          </figure>
          <strong>WORK</strong></a>
      </router-link>
      <router-link to="/About" class="" tag="div" exact>
        <a class="nav-item is-tab is-hidden-mobile">
          <figure class="image is-32x32" style="margin-right: 2px;">
            <img src="../../static/img/Navigation Icons/icon2.png"
                 onmouseover="this.src='../../static/img/Navigation Icons/icon2_green.png'"
                 onmouseout="this.src='../../static/img/Navigation Icons/icon2.png'">
          </figure>
          <strong>ABOUT</strong></a>
      </router-link>
      <router-link to="/Services" class="" tag="div" exact>
        <a class="nav-item is-tab is-hidden-mobile">
          <figure class="image is-32x32" style="margin-right: 2px;">
            <img src="../../static/img/Navigation Icons/icon4.png"
                 onmouseover="this.src='../../static/img/Navigation Icons/icon4_green.png'"
                 onmouseout="this.src='../../static/img/Navigation Icons/icon4.png'">

          </figure>
          <strong>SERVICES</strong></a>
      </router-link>
      <router-link to="/Contact" class="" tag="div" exact>
        <a class="nav-item is-tab is-hidden-mobile">
          <figure class="image is-32x32" style="margin-right: 2px;">
            <img src="../../static/img/Navigation Icons/icon3.png"
                 onmouseover="this.src='../../static/img/Navigation Icons/icon3_green.png'"
                 onmouseout="this.src='../../static/img/Navigation Icons/icon3.png'">
          </figure>
          <strong>CONTACT</strong></a>
      </router-link>
      <router-link to="/Blog" class="" tag="div" exact>
        <a class="nav-item is-tab is-hidden-mobile">
          <figure class="image is-32x32" style="margin-right: 2px;">
            <img src="../../static/img/Navigation Icons/icon5.png"
                 onmouseover="this.src='../../static/img/Navigation Icons/blog-29.svg'"
                 onmouseout="this.src='../../static/img/Navigation Icons/icon5.png'">
          </figure>
          <strong>BLOG</strong></a>
      </router-link>
      <router-link to="/Shop" class="" tag="div" exact>
        <a class="nav-item is-tab is-hidden-mobile">
          <figure class="image is-32x32" style="margin-right: 2px;">
            <img src="../../static/img/Navigation Icons/icon6.png"
                 onmouseover="this.src='../../static/img/Navigation Icons/icon6_green.png'"
                 onmouseout="this.src='../../static/img/Navigation Icons/icon6.png'">
          </figure>
          <strong>SHOP</strong></a>
      </router-link>
    </div>
    <!--<label style="font-size: xx-large;" class="nav-toggle" for="nav-toggle-state">-->
    <!--</label>-->

    <!--&lt;!&ndash; This checkbox is hidden &ndash;&gt;-->
    <!--<input type="checkbox" id="nav-toggle-state"/>-->
    <div class="navbar-menu navbar-end">
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
      <!--Mobile Menu-->
      <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
      <router-link to="/Work"><a style="color: #4cc1a1" class="nav-item is-tab is-hidden-tablet">WORK</a></router-link>
      <router-link to="/About"><a style="color: #4cc1a1" class="nav-item is-tab is-hidden-tablet">ABOUT</a></router-link>
      <router-link to="/Services"><a style="color: #4cc1a1" class="nav-item is-tab is-hidden-tablet">SERVICES</a></router-link>
      <router-link to="/Blog"><a style="color: #4cc1a1" class="nav-item is-tab is-hidden-tablet">BLOG</a></router-link>
      <router-link to="/Contact"><a style="color: #4cc1a1" class="nav-item is-tab is-hidden-tablet">CONTACT</a></router-link>
      <router-link to="/Shop"><a style="color: #4cc1a1" class="nav-item is-tab is-hidden-tablet">SHOP</a></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigationMenu',
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

  svg:hover {
    fill: #111;
  }

  #nav-toggle-state:checked ~ .nav-menu {
    display: block;
  }

  navbar {
    width: 100%;
    position: fixed;
    background: #fff;
    opacity: .8;
  }

  .nav-item {
    font-family: Montserrat, sans-serif;
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
  /*.nav-item a.is-tab.is-active, a.nav-item.is-tab.is-active {*/
    /*border-bottom: #4cc1a1;*/
  /*}*/
</style>
