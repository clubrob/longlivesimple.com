<template>
  <footer class="footer">
    <back-top></back-top>
    <div class="columns">
      <div class="column">
        <div class="content">
          <p>
            &copy; Long Live Simple, LLC {{ currentYear }}
            <br>All Rights Reserved
          </p>
        </div>
      </div>
      <div class="column is-6">
        <p class="subtitle has-text-centered">
          <nuxt-link
            :to="{path: '/about', hash: 'meetTheTeam'}"
          >Site Credits</nuxt-link>&nbsp;|
          <nuxt-link
            :to="{path: '/services', hash: 'testimonials'}"
          >Testimonials</nuxt-link>
        </p>
      </div>
      <div class="column">
        <div class="content">
          <p class="is-size-5 has-text-right-desktop">Socialize with us:</p>
        </div>
        <ul class="has-text-right-desktop">
          <li>
            <a href="https://www.instagram.com/longlivesimple" aria-label="Instagram">
              <img src="/img/icons/instagram-icon.svg" class="image is-32x32" alt="Instagram Icon">
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/longlivesimple" aria-label="Facebook">
              <img src="/img/icons/facebook-icon.svg" class="image is-32x32" alt="Facebook Icon">
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/longlivesimple" aria-label="Twitter">
              <img src="/img/icons/twitter-icon.svg" class="image is-32x32" alt="Twitter Icon">
            </a>
          </li>
          <li>
            <a href="https://www.pinterest.com/longlivesimple" aria-label="Pinterest">
              <img src="/img/icons/pinterest-icon.svg" class="image is-32x32" alt="Pinterest Icon">
            </a>
          </li>
          <li>
            <a href="https://www.dribbble.com/longlivesimple" aria-label="Dribbble">
              <img src="/img/icons/dribbble-icon.svg" class="image is-32x32" alt="Dribble Icon">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <ul>
      <li>
        <img src="/img/icons/go-local.jpg" class="image" alt="Go Local Here 2019" style="width: 64px; height: auto;">
      </li>
      <li>
        <img
          src="/img/icons/mountain-biz-works.png"
          class="image is-64x64"
          alt="Go Local Here 2019"
        >
      </li>
    </ul>
  </footer>
</template>

<script>
import BackTop from "./BackTop";
export default {
  components: { BackTop },
  data: function() {
    let newDate = new Date();
    return {
      currentYear: newDate.getFullYear()
    };
  },
  name: "footerCustom"
};
</script>

<style lang="scss" scoped>
li {
  display: inline-block;
}
.scroll-button {
  /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
}
.scroll-button i {
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: lightgray; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  border-radius: 10px; /* Rounded corners */
  padding: 0 10px;
}
.scroll-button:hover i {
  background-color: rgb(76, 191, 160); /* Add a dark-grey background on hover */
}
.slick-container {
  height: 60%;
}
a {
  color: grey;
}
a:hover {
  color: #42b983;
}
</style>
