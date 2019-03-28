<template>
  <div class="work">
    <section class="section is-paddingless">
      <page-banner :pageTitle="contactBanner.text" :pageImgUrl="contactBanner.image">
        <svg
          class="banner-icon"
          width="162"
          height="215"
          viewBox="0 0 162 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M130.833 215H30.2661C13.5572 215 0 201.443 0 184.739V30.2614C0 13.5572 13.5572 0 30.2661 0H90.7935L161.094 64.3113V185.052C161.094 201.443 147.542 215 130.833 215ZM85.75 15.7113L85.1224 15.1307H30.2661C22.0709 15.1307 15.1354 21.7524 15.1354 30.2614V185.052C15.1354 193.248 21.7524 200.183 30.2661 200.183H130.833C139.028 200.183 145.964 193.566 145.964 185.052V81.6476H116.016C99.3072 81.6476 85.75 68.0951 85.75 51.3863V15.7113ZM24.9088 132.088H133.671V160.776H24.9088V132.088ZM33.7362 139.656V153.213H124.843V139.656H33.7362ZM43.7671 96.1695C40.4937 92.9711 38.4613 88.4988 38.4613 83.5396C38.4613 73.7662 46.3427 65.8847 56.1161 65.8847C65.8895 65.8847 73.7709 73.7662 73.7709 83.5396C73.7709 88.3349 71.8743 92.6713 68.7882 95.8511C79.2031 100.787 82.2845 111.769 82.2845 118.217V122.319H31.212V118.535C31.212 118.217 30.8983 107.502 38.1475 100.248C39.7725 98.6234 41.6598 97.2513 43.7671 96.1695ZM91.7394 109.39H132.093V116.957H91.7394V109.39ZM39.0935 114.752H74.0847C73.1434 109.708 69.3595 101.194 56.4345 101.194C50.7587 101.194 46.6612 102.773 43.5095 105.61C40.6716 108.448 39.4073 111.914 39.0935 114.752ZM91.7394 91.1072H132.093V98.6749H91.7394V91.1072ZM58.4576 93.3691C62.9626 92.3436 66.2079 88.4052 66.2079 83.5396C66.2079 77.8685 61.7919 73.4524 56.1161 73.4524C50.4403 73.4524 46.029 77.8685 46.029 83.5396C46.029 88.4707 49.3586 92.4466 53.9479 93.4066C54.7627 93.3457 55.5869 93.3129 56.4345 93.3129C57.1229 93.3129 57.802 93.3317 58.4576 93.3691ZM100.885 29.587V51.3863C100.885 59.5815 107.502 66.5169 116.016 66.5169H141.154L100.885 29.587Z"
            fill="#ffffff"
          ></path>
        </svg>
      </page-banner>
    </section>
    <section class="section">
      <div class="container contact-section">
        <div class="content">
          <h3 class="title">Contact Our Studio</h3>
          <p
            class="has-text-left"
          >Every business or entrepreneur has a story to tell—let’s tell yours.</p>
          <p
            class="has-text-left"
          >Get in touch with us by filling out our form below. We will be in touch within 1-2 business days.</p>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half">
            <form
              class="contact-form"
              action="https://formspree.io/hello@longlivesimple.com"
              method="POST"
            >
              <div class="field">
                <label class="label has-text-left" for="contact-name">Name</label>
                <div class="control has-icons-left">
                  <input
                    class="input is-primary"
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="First and Last Name"
                    required
                  >
                  <span class="icon is-small is-left">
                    <i class="mdi mdi-account"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-left" for="contact-email">Email</label>
                <div class="control is-expanded has-icons-left has-icons-right">
                  <input class="input is-primary" type="email" placeholder="Email" name="_replyto" id="contact-email" required>
                  <span class="icon is-small is-left">
                    <i class="mdi mdi-email"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label has-text-left" for="contact-subject">Subject</label>
                <div class="control">
                  <input
                    class="input is-primary"
                    type="text"
                    placeholder="e.g. Partnership opportunity"
                    name="subject"
                    id="contact-subject"
                    required
                  >
                </div>
              </div>
              <div class="field">
                <label class="label has-text-left" for="contact-inquiry">Inquiry</label>
                <div class="control">
                  <textarea
                    class="textarea is-primary"
                    placeholder="Tell us about your creative project or company"
                    name="Services"
                    id="contact-inquiry"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <app-button
                    :isButton="submitButton.isButton"
                    :buttonText="submitButton.text"
                    :buttonUrl="submitButton.url"
                    :buttonStyle="submitButton.style"
                    :buttonType="submitButton.type"
                    type="submit"
                  ></app-button>
                </div>
              </div>
            </form>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AppButton from "../components/Button";
import PageBanner from "../components/PageBanner";
export default {
  name: "Contact",
  components: { AppButton, PageBanner },
  data: function() {
    return {
      contactBanner: {
        text: "Contact",
        image: "/img/contact/contact-banner.jpg"
      },
      submitButton: {
        url: "",
        text: "Send Message",
        isButton: true,
        style: "positive",
        type: "submit"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.banner-icon {
  height: 44px;
  width: auto;
  padding-right: 20px;
}
@media screen and (min-width: 1088px) {
  .banner-icon {
    height: 68px;
  }
}
.hero-background-image {
  background: url("/img/CONTACT/CONTACT_hero.png") center;
  background-size: cover;
}
.input.is-primary,
textarea.is-primary {
  border-color: #dbdbdb;
}
</style>
