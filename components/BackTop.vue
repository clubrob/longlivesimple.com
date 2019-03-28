<template>
  <span @click.prevent="backTop" class="is-hidden-touch">
    <span class="scroll-button icon is-large">
      <i class="mdi mdi-36px mdi-arrow-up-thick" aria-hidden="true"></i>
    </span>
  </span>
</template>

<script>
export default {
  name: "backTop",
  props: {
    speed: {
      type: Number,
      default: 0.1
    }
  },
  data() {
    return {};
  },
  methods: {
    backTop: function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
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
  background-color: #d3d3d3; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  border-radius: 10px; /* Rounded corners */
  padding: 0 10px;
}
.scroll-button:active i,
.scroll-button:visited i,
.scroll-button:focus i {
  background-color: #d3d3d3; /* Add a dark-grey background on hover */
}
.scroll-button:hover i {
  background-color: rgb(76, 191, 160); /* Add a dark-grey background on hover */
}
</style>
