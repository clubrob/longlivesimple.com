<template>
  <div class="portfolio-banner" :style="'background-image: url(' + portfolioImgUrl + ');'">
    <h1 class="portfolio-banner__title">{{portfolioTitle}}</h1>
    <h2 class="portfolio-banner__subtitle">{{portfolioSubtitle}}</h2>
  </div>
</template>

<script>
export default {
  props: ["portfolioTitle", "portfolioSubtitle", "portfolioImgUrl"]
};
</script>

<style lang="scss" scoped>
.portfolio-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 300px;
}
.portfolio-banner__title,
.portfolio-banner__subtitle {
  padding-top: 0;
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 34px;
  font-weight: 800;
}
.portfolio-banner__subtitle {
  padding-top: 0;
  font-size: 20px;
  font-weight: 500;
}
@media screen and (min-width: 768px) {
  .portfolio-banner__title {
    font-size: 34px;
  }
  .portfolio-banner__subtitle {
    font-size: 24px;
  }
}
@media screen and (min-width: 1088px) {
  .portfolio-banner__title {
    padding-top: 50px;
    font-size: 48px;
  }
  .portfolio-banner__subtitle {
    font-size: 24px;
  }
}
</style>

