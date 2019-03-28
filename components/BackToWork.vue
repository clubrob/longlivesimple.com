<template>
  <section class="hero back-to-work">
    <div class="hero-body">
      <div class="container">
        <nuxt-link to="/work">
          <h1 class="title">
            Back To Work
            <i class="mdi mdi-chevron-right"></i>
          </h1>
        </nuxt-link>
        <h2 class="subtitle"></h2>
      </div>
    </div>
  </section>
</template>
<script>
export default { name: "backtowork" };
</script>
<style scoped>
.back-to-work {
  background-color: rgb(160, 211, 200);
}
.title {
  color: white;
}
</style>
