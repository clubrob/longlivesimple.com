<template>
  <div>
    <section style="background-color: rgb(230, 238, 236)" class="hero">
      <div class="hero-body is-paddingless">
        <no-ssr placeholder="Loading...">
          <app-slider></app-slider>
        </no-ssr>
      </div>
    </section>

    <section class="section lls-intro">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column">
            <div class="content">
              <p>
                <img src="/img/index/we-are-long-live-simple.png" alt>
              </p>
              <p class="is-size-6 is-size-4-desktop has-text-weight-bold has-text-right">
                <nuxt-link to="/about">
                  More About Us
                  <i class="mdi mdi-chevron-right"></i>
                </nuxt-link>
              </p>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <p
                class="is-size-5 has-text-left is-hidden-mobile"
              >Here at Long Live Simple, we believe brands should tell stories. Whether your brand is an extension of what you do, a reflection of your personality or a platform to your ideal audience, we love creating unique, hand-drawn logos and custom work so our clients can have a symbol that represents who they are and what they do. We offer meaningful experiences for customer-driven and thoughtful brands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero what-we-offer">
      <div class="hero-body">
        <div class="container z-2">
          <div class="content">
            <h2 class="is-size-2 is-uppercase has-text-weight-bold has-text-white">What we offer:</h2>
          </div>
          <div class="columns">
            <ul class="column has-text-white is-size-5 has-text-right-desktop">
              <li>Branding Packages</li>
              <li>Print Collateral Design</li>
              <li>Custom Illustration</li>
              <li>Custom Iconography</li>
            </ul>
            <div class="column is-1">
              <div class="divider-line"></div>
            </div>
            <ul class="column has-text-white is-size-5 has-text-left-desktop">
              <li>Web Design</li>
              <li>Social Media Setup</li>
              <li>Brand Strategy Consulting</li>
              <li>User Experience Consulting</li>
            </ul>
          </div>
          <app-button
            :isButton="servicesButton.isButton"
            :buttonText="servicesButton.text"
            :buttonUrl="servicesButton.url"
            :buttonStyle="servicesButton.style"
            style="margin-top: 40px"
          ></app-button>
        </div>
        <div class="section__overlay"></div>
      </div>
    </section>
    <section class="hero is-medium">
      <div class="columns is-gapless">
        <div style="background: #E2F2EA;" class="column">
          <nuxt-link to="/about">
            <color-card
              :headlineTextTop="localCard.headlineTextTop"
              :headlineTextBottom="localCard.headlineTextBottom"
              :bodyText="localCard.bodyText"
              :bgColor="localCard.bgColor"
              :textColor="localCard.textColor"
            >
              <svg
                class="color-card-icon"
                width="152"
                height="165"
                viewBox="0 0 152 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M77.9644 0.605438H73.9042H73.4531C53.9042 1.35732 35.7087 9.02649 22.0245 22.41C8.18992 35.9438 0.520752 53.6881 0.520752 72.4851C0.520752 94.8912 16.1599 111.282 32.7012 128.726C41.5734 138.049 68.3403 158.651 72.7012 162.109L73.002 162.26C73.002 162.26 73.1523 162.26 73.1523 162.41L73.4531 162.711L76.0095 164.666L78.8666 162.41C82.0245 160.004 110.145 138.35 119.318 128.726C135.859 111.433 151.498 95.0415 151.498 72.4851C151.498 33.9889 118.566 1.80845 77.9644 0.605438ZM5.18241 72.6355C5.18241 35.7934 36.7614 5.56784 75.7087 5.26709H76.1598C115.107 5.56784 146.686 35.643 146.686 72.6355C146.686 93.237 131.649 108.876 115.859 125.568C106.987 134.891 79.1674 156.395 76.0095 158.801C72.8516 156.395 45.032 134.891 36.1599 125.568C20.22 108.876 5.18241 93.237 5.18241 72.6355Z"
                  fill="#979797"
                ></path>
                <path
                  d="M74.2031 117.596L76.3083 119.1L77.0602 118.498L78.2632 117.596C82.0226 114.739 94.0527 105.416 98.1128 101.205C106.233 92.6337 114.053 84.5134 114.053 73.0848C114.053 53.3856 97.361 37.145 76.6091 36.9946C76.4587 36.9946 76.4587 36.9946 76.3083 36.9946C76.158 36.9946 76.158 36.9946 76.0076 36.9946C55.2557 37.2954 38.564 53.3856 38.564 73.0848C38.564 84.5134 46.2331 92.6337 54.5038 101.205C59.1655 106.168 73.6016 117.145 74.2031 117.596ZM83.9775 106.919C80.6692 109.626 77.6617 111.882 76.158 113.085C72.3986 110.228 66.8346 105.716 62.4737 102.107L77.8121 86.9194H85.3309L83.9775 106.919ZM109.09 73.0848C109.09 82.5585 102.023 89.9269 94.5038 97.7465C93.3008 98.9495 91.3459 100.754 89.2407 102.559L90.2933 86.6187L92.6993 62.8593L108.188 65.7164C108.79 68.2728 109.09 70.6788 109.09 73.0848ZM68.6392 42.8593C71.0452 42.2578 73.6016 41.957 76.3083 41.957C89.8422 42.1074 101.421 49.7765 106.384 60.9044L90.7444 57.7465H90.4437C88.4888 57.7465 79.9174 58.348 77.6617 58.4984L68.4888 54.5886V42.8593H68.6392ZM63.8271 44.2126V52.3329L55.7068 48.8743C58.1128 47.0698 60.8196 45.4156 63.8271 44.2126ZM43.5264 73.0848C43.5264 65.2653 46.6843 58.0472 51.7971 52.4833L54.2031 53.536L63.8271 57.5961V73.8367H43.5264C43.5264 73.6863 43.5264 73.3856 43.5264 73.0848ZM68.6392 78.7991V59.7014L76.9098 63.3104H77.5113C79.767 63.16 84.579 62.8593 87.8873 62.7089L85.9324 82.1074H76.0076L59.0151 98.7991C58.7143 98.4984 58.2632 98.0472 57.9625 97.8968C52.0978 91.7314 46.3835 85.7164 44.2783 78.7991H68.6392Z"
                  fill="#979797"
                ></path>
              </svg>
            </color-card>
          </nuxt-link>
        </div>
        <div style="background-color: #4CBFA0" class="column">
          <nuxt-link to="/about">
            <color-card
              :headlineTextTop="sustainCard.headlineTextTop"
              :headlineTextBottom="sustainCard.headlineTextBottom"
              :bodyText="sustainCard.bodyText"
              :bgColor="sustainCard.bgColor"
              :textColor="sustainCard.textColor"
            >
              <svg
                class="color-card-icon"
                width="167"
                height="182"
                viewBox="0 0 167 182"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.8451 118.77C65.2962 123.897 73.8977 126.71 83.1609 126.71H87.1308C95.0707 126.048 102.514 123.401 108.138 118.935C116.244 112.649 120.379 102.89 120.379 90.9802C120.379 82.5441 115.086 75.5967 106.484 64.8448C103.341 61.0403 100.198 56.905 97.221 52.6042C94.5744 48.7997 89.2812 41.5215 85.1459 36.0629L84.1534 34.7396L83.4917 33.7471V33.4163L83.3263 33.5817L83.1609 33.4163V33.7471L82.8301 34.7396L81.8376 36.0629C77.8677 41.3561 72.409 48.6343 69.7624 52.6042C66.7849 56.905 63.6421 60.8749 60.4992 64.8448C51.8977 75.4313 46.6045 82.5441 46.6045 90.9802C46.6045 102.725 50.9052 112.484 58.8451 118.77ZM102.68 68.1531C110.62 77.9125 115.417 84.1982 115.417 90.9802C115.417 101.401 111.943 109.341 105.161 114.634C100.86 118.108 94.0782 120.424 87.4616 121.251L87.2962 105.371C87.4616 105.371 87.6271 105.371 87.6271 105.206L101.687 93.4614C102.349 92.9651 102.349 91.9727 101.853 91.4764L100.529 89.8223C100.033 89.1606 99.0406 89.1606 98.5444 89.6569L87.1308 99.0854V92.4689C87.2962 92.4689 87.4616 92.4689 87.4616 92.3035L98.0481 82.8749C98.7098 82.3787 98.7098 81.3862 98.2135 80.8899L96.8902 79.2358C96.394 78.5742 95.4015 78.5742 94.9053 79.0704L87.1308 86.0178V79.2358C87.2962 79.2358 87.4616 79.2358 87.6271 79.0704L94.409 73.2809C95.0707 72.7847 95.0707 71.7922 94.5744 71.296L93.2511 69.6418C92.7549 68.9802 91.7624 68.9802 91.2662 69.4764L87.2962 72.9501L86.9654 45.8223C91.597 53.2659 100.033 65.0102 102.68 68.1531ZM64.6346 68.1531C67.2812 64.8448 76.2135 52.4388 81.1759 45.4914L81.5068 72.7847L78.1985 69.8072C77.5368 69.311 76.7098 69.311 76.2135 69.9727L74.8902 71.6268C74.394 72.2884 74.394 73.1155 75.0556 73.6118L81.6722 79.4012V86.0178L74.2286 79.4012C73.5669 78.905 72.7398 78.905 72.2436 79.5666L70.9203 81.2208C70.424 81.8824 70.424 82.7095 71.0857 83.2057L81.6722 92.6343H81.8376V99.2509L70.5895 89.8223C69.9278 89.326 69.1007 89.326 68.6045 89.9877L67.2812 91.6418C66.7849 92.3035 66.785 93.1306 67.4466 93.6268L81.5068 105.371C81.6722 105.537 81.8376 105.537 82.003 105.537L82.1684 121.582C75.0556 121.085 67.1158 118.604 62.3188 114.8C55.5368 109.341 52.0631 101.401 52.0631 91.1456C51.8977 84.1982 56.8601 77.9125 64.6346 68.1531Z"
                  fill="white"
                ></path>
                <path
                  d="M85.6413 0.666016H81.1752H80.6789C59.1752 1.49308 39.1601 9.92918 24.1075 24.651C8.88946 39.5382 0.453369 59.057 0.453369 79.7337C0.453369 104.38 17.6564 122.41 35.8519 141.598C45.6113 151.854 75.0549 174.516 79.8519 178.32L80.1827 178.486C80.1827 178.486 80.3481 178.486 80.3481 178.651L80.6789 178.982L83.491 181.132L86.6338 178.651C90.1075 176.004 121.04 152.185 131.13 141.598C149.326 122.576 166.529 104.546 166.529 79.7337C166.529 37.3878 130.303 1.98932 85.6413 0.666016ZM5.7466 79.8991C5.7466 39.3728 40.4834 6.12466 83.3256 5.79383H83.8218C126.664 6.12466 161.401 39.2074 161.401 79.8991C161.401 102.561 144.859 119.764 127.491 138.125C117.732 148.38 87.1301 172.034 83.6564 174.681C80.1827 172.034 49.5812 148.38 39.8218 138.125C22.1225 119.764 5.7466 102.561 5.7466 79.8991Z"
                  fill="white"
                ></path>
              </svg>
            </color-card>
          </nuxt-link>
        </div>
        <div style="background: #A1D7CA;" class="column">
          <nuxt-link to="/about">
            <color-card
              :headlineTextTop="communityCard.headlineTextTop"
              :headlineTextBottom="communityCard.headlineTextBottom"
              :bodyText="communityCard.bodyText"
              :bgColor="communityCard.bgColor"
              :textColor="communityCard.textColor"
            >
              <svg
                class="color-card-icon"
                width="145"
                height="158"
                viewBox="0 0 145 158"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M73.0666 117.12L99.6343 89.9777L111.41 77.0529C115.144 73.3191 117.155 68.2928 117.155 63.1228C117.155 57.8093 115 52.9266 111.267 49.1928C103.512 41.5815 91.0178 41.5815 83.4065 49.1928L72.3486 59.1018L62.296 49.1928C54.6847 41.4379 42.0471 41.4379 34.4358 49.0492C30.702 52.783 28.6915 57.6657 28.5479 62.9792C28.5479 68.2928 30.5584 73.1755 34.2922 76.9093L46.0682 89.8341L73.0666 117.12ZM72.4922 69.0108C75.7952 72.8883 77.3749 75.186 78.093 76.3349C78.2366 76.4785 78.3802 76.7657 78.5238 76.9093C78.6674 77.0529 78.6674 77.1965 78.6674 77.1965C78.9546 77.6273 78.9546 78.0582 79.0982 78.6326V78.9198C79.0982 79.6379 78.9546 80.2123 78.9546 80.3559V80.4995C78.9546 80.6431 78.811 80.6431 78.811 80.7867C78.6674 81.2176 78.5238 81.6484 78.3802 81.9356C78.3802 82.0792 78.2366 82.0792 78.093 82.2228C77.9494 82.5101 77.6621 82.7973 77.5185 82.9409L76.6569 83.8025C76.5133 83.9462 76.2261 84.0898 76.0824 84.0898C75.9388 84.0898 75.7952 84.2334 75.6516 84.2334C75.3644 84.377 75.2208 84.377 74.9336 84.5206C74.79 84.5206 74.6463 84.6642 74.5027 84.6642C74.2155 84.6642 73.9283 84.8078 73.7847 84.8078C73.6411 84.8078 73.6411 84.8078 73.4975 84.8078C73.0666 84.8078 72.7794 84.8078 72.6358 84.8078C71.6306 84.8078 70.4817 84.5206 69.3328 84.0898C69.1892 84.0898 69.1892 83.9462 69.0456 83.9462C68.7584 83.8025 68.4712 83.6589 68.3276 83.5153C68.1839 83.3717 68.0403 83.2281 67.8967 83.2281C67.7531 83.0845 67.6095 82.9409 67.4659 82.7973C67.1787 82.5101 67.0351 82.2228 66.8915 81.9356C66.4606 81.2176 66.4606 80.6431 66.4606 80.6431C65.599 78.0582 66.6042 76.9093 66.6042 76.9093V76.7657C66.7479 76.4785 67.0351 76.1913 67.1787 75.904C69.4764 72.601 72.4922 69.0108 72.4922 69.0108ZM38.026 73.6063C35.1539 70.7341 33.7178 67.0003 33.7178 62.9792C33.7178 58.9582 35.2975 55.2243 38.1697 52.3522C44.0576 46.4642 53.5358 46.6078 59.4238 52.4958L69.9072 62.692C68.902 63.9845 66.4606 67.1439 65.599 68.4364C65.1682 69.0108 64.7373 69.7289 64.1629 70.3033C62.4396 72.4574 60.4291 75.0424 60.4291 78.6326C60.4291 86.3875 66.317 90.5522 72.3486 90.8394H73.9283C79.8163 90.4085 85.417 86.2439 85.417 78.7762C85.417 75.186 83.4065 72.7446 81.6832 70.4469C81.1087 69.7289 80.6779 69.1544 80.2471 68.58C79.3854 67.2875 77.0877 64.4153 75.9388 62.9792L87.2839 52.6394L87.4275 52.4958C93.3155 46.6078 102.794 46.6078 108.538 52.4958C111.41 55.368 112.99 59.1018 112.99 63.1228C112.99 67.1439 111.41 70.8777 108.682 73.7499L96.7621 86.8183L73.0666 110.37L49.9456 86.6747L38.1697 73.7499L38.026 73.6063Z"
                  fill="white"
                ></path>
                <path
                  d="M74.5047 0.364868H70.6272H70.1964C51.5272 1.08291 34.1505 8.40698 21.0821 21.1882C7.87008 34.113 0.546021 51.0589 0.546021 69.01C0.546021 90.4077 15.4814 106.061 31.2783 122.72C39.7513 131.624 65.3137 151.298 69.4784 154.601L69.7656 154.745C69.7656 154.745 69.9092 154.745 69.9092 154.888L70.1964 155.175L72.6378 157.042L75.3663 154.888C78.3821 152.59 105.237 131.911 113.997 122.72C129.794 106.205 144.729 90.5513 144.729 69.01C144.586 32.1025 113.279 1.37013 74.5047 0.364868ZM4.9979 69.01C4.9979 33.8258 35.1558 4.96036 72.3505 4.67314H72.7814C109.976 4.96036 140.134 33.6822 140.134 69.01C140.134 88.6844 125.773 103.62 110.694 119.56C102.221 128.464 75.6535 149 72.6378 151.298C69.622 149 43.0543 128.464 34.5814 119.56C19.3588 103.763 4.9979 88.6844 4.9979 69.01Z"
                  fill="white"
                ></path>
              </svg>
            </color-card>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="section newsletter-section">
      <div class="container">
        <div class="columns z-2">
          <div class="column">
            <div class="content">
              <p
                class="has-text-left has-text-weight-bold has-text-white is-size-5"
              >Sign up for our newsletter to receive branding insights, freebies, and happenings.</p>
              <p
                class="has-text-left is-italic has-text-white is-size-5"
              >We aren't the spamming type.</p>
            </div>
          </div>
          <div class="column">
            <form action="https://longlivesimple.us14.list-manage.com/subscribe/post" method="post">
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field">
                    <label class="is-invisible" for="news-name" style="position: absolute; transform: translateX(-9000px);">Name</label>
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="text" placeholder="Name" name="u" value id="news-name" required>
                      <span class="icon is-small is-left">
                        <i class="mdi mdi-account"></i>
                      </span>
                    </p>
                  </div>
                  <div class="field">
                    <label class="is-invisible" for="news-email" style="position: absolute; transform: translateX(-9000px);">Email</label>
                    <p class="control is-expanded has-icons-left">
                      <input class="input" type="email" placeholder="Email" name="id" value id="news-email" required>
                      <span class="icon is-small is-left">
                        <i class="mdi mdi-email"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field">
                    <div class="control has-text-right">
                      <app-button
                        :isButton="contactButton.isButton"
                        :buttonText="contactButton.text"
                        :buttonUrl="contactButton.url"
                        :buttonStyle="contactButton.style"
                        :buttonType="contactButton.type"
                      ></app-button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="section__overlay"></div>
    </section>
  </div>
  <!--End of First Hero-->
</template>

<script>
import AppSlider from "../components/HomeSlider";
import AppButton from "../components/Button";
import ColorCard from "../components/ColorCard";

export default {
  name: "index",
  components: { AppSlider, AppButton, ColorCard },
  data() {
    return {
      localCard: {
        headlineTextTop: "Local",
        headlineTextBottom: "Features",
        bodyText:
          "We support local businesses and entrepreneurs in the Asheville, NC area by offering year-round discounts.",
        bgColor: "#E2F2EA",
        textColor: "#979797"
      },
      sustainCard: {
        headlineTextTop: "Sustainable",
        headlineTextBottom: "Practices",
        bodyText:
          "We educate our clients on sustainable printing practices and work with local and online sustainability conscious printers.",
        bgColor: "#4CBFA0",
        textColor: "#ffffff"
      },
      communityCard: {
        headlineTextTop: "Community",
        headlineTextBottom: "Focused",
        bodyText:
          "Creating benefits for others such as freebies, design tips, and connecting with the community is our passion.",
        bgColor: "#A1D7CA",
        textColor: "#ffffff"
      },
      contactButton: {
        url: "",
        text: "Get Notified",
        isButton: true,
        style: "negative",
        type: "submit"
      },
      servicesButton: {
        url: "/services",
        text: "See our full list of services",
        isButton: false,
        style: "negative"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.input:focus {
  border-color: transparent;
}
.section__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}
.what-we-offer {
  position: relative;
  background-image: url("/img/index/whatweoffer.jpg");
  padding: 40px 0;
}
.lls-intro {
  background-color: rgb(230, 238, 236);
}
.divider-line {
  height: 100%;
  width: 1px;
  background-color: #fff;
  margin: 0 auto;
}
.color-card-icon {
  width: 100px;
  height: auto;
}
.newsletter-section {
  position: relative;
  background-image: url("/img/index/newsletter.jpg");
}
.newsletter-section .columns {
  position: relative;
}
</style>
