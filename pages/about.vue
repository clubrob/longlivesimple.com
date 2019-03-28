<template>
  <div>
    <section class="section is-paddingless">
      <page-banner :pageTitle="aboutBanner.text" :pageImgUrl="aboutBanner.image">
        <svg
          class="banner-icon"
          width="197"
          height="215"
          viewBox="0 0 197 215"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M98.4531 215L90.1728 208.561C80.6649 201.2 51.5271 178.505 40.7915 167.46C20.5479 146.298 0 124.522 0 94.4657C0 69.9296 10.1214 46.3121 28.2187 28.5239C46.007 11.0403 69.9292 0.918558 95.3883 0H107.042V0.304688C157.033 4.59718 196.907 45.6982 196.907 94.4657C196.907 124.522 176.054 146.298 156.115 167.46C145.074 179.119 112.867 203.96 106.429 208.87L98.4531 215ZM100.599 14.719H95.693C73.6123 15.642 53.3687 24.2269 38.0314 38.9504C22.6985 53.9785 14.4139 73.6083 14.4139 94.1566C14.4139 118.388 31.5927 136.176 51.2224 157.034C59.1936 165.314 81.2787 183.102 98.1484 196.293C105.201 191.078 135.566 167.46 145.379 157.034C165.009 136.176 182.188 118.388 182.188 94.1566C182.188 51.5276 145.688 15.9467 100.599 14.719ZM99.0669 159.18L62.8766 122.376L46.9255 105.201C41.7145 99.9859 38.9544 93.238 38.9544 85.8763C38.9544 78.5146 41.7145 71.7668 46.9255 66.5557C57.6612 55.8201 74.8356 56.1248 85.5712 66.5557L98.4531 79.1285L112.563 66.2466C122.989 55.8201 140.473 55.5154 151.208 66.2466C156.424 71.4621 159.184 78.2099 159.184 85.5716C159.184 92.9334 156.424 99.6812 151.208 104.892L135.257 122.376L99.0669 159.18ZM145.22 71.9169C141.568 68.3442 137.024 66.5557 131.888 66.5557C126.672 66.5557 122.071 68.7019 118.392 72.0759L103.669 85.2625C104.896 86.7993 107.656 90.4779 108.884 92.3195C109.149 92.7213 109.418 93.0658 109.688 93.4015L109.917 93.6885C110.187 94.0241 110.456 94.3686 110.721 94.7705C113.177 97.8397 115.937 101.214 115.937 106.429C115.937 116.856 107.961 122.68 100.599 123.294H96.6116C88.9451 122.685 80.6649 117.16 80.6649 106.12C80.6649 100.904 83.4249 97.5305 85.8803 94.4657C86.4942 93.5472 87.108 92.6242 87.7174 92.0104C88.9451 90.478 91.7052 86.7993 93.242 84.9578L79.7463 72.3806C76.0632 68.7019 71.1569 66.5557 66.2506 66.5557C61.3442 66.5557 56.4335 68.3928 52.7548 72.0759C49.0717 75.7545 47.2346 80.3562 47.2346 85.5716C47.2346 90.7871 49.0717 95.3843 52.7548 99.0674L53.0596 99.3721L68.7015 116.546L99.0669 147.526L129.432 116.546L145.379 99.0674C149.022 95.424 150.864 90.5795 150.899 85.7262C150.873 82.1712 149.848 78.6295 148.029 75.5735C147.313 74.4076 146.483 73.3035 145.556 72.2702C145.445 72.1509 145.335 72.0317 145.22 71.9169ZM105.51 108.575C105.51 108.266 105.815 107.652 105.815 106.734V106.429C105.815 105.815 105.51 105.201 105.51 104.892L105.201 104.588C105.201 104.278 104.896 103.974 104.587 103.665C103.669 102.441 101.827 99.3721 97.8393 94.7705C96.9251 95.9142 95.1631 98.2504 93.3039 100.635C92.8314 101.43 92.3897 102.247 92.0143 103.051C91.8774 103.188 91.7449 103.382 91.6125 103.581L91.4977 103.753C91.3608 103.952 91.2283 104.146 91.0914 104.278C91.0914 104.278 89.559 105.815 90.4775 108.88C90.4775 109.021 90.4775 109.22 90.5349 109.485C90.6144 109.604 90.7027 109.715 90.7866 109.799C90.9191 109.936 90.9942 110.068 91.0649 110.205L91.1223 110.32C91.1885 110.452 91.2636 110.585 91.4005 110.722C91.7052 111.026 91.7052 111.026 92.0143 111.335C92.3191 111.64 92.3191 111.64 92.6282 111.64C92.7607 111.777 92.8932 111.852 93.0301 111.918L93.1449 111.976C93.2774 112.046 93.4142 112.121 93.5467 112.254C93.8514 112.254 93.8515 112.559 93.8515 112.559C95.0792 113.177 96.6116 113.482 97.8393 113.482C98.4178 114.056 98.7225 114.091 99.2613 114.096H99.3761C99.9899 114.096 100.295 114.095 100.599 113.786H100.908C101.041 113.786 101.178 113.729 101.31 113.663L101.425 113.605C101.558 113.539 101.695 113.482 101.827 113.482L102.441 113.177C102.75 113.177 103.055 112.868 103.055 112.868L103.359 112.559L104.282 113.177L103.973 112.254L104.282 111.949C104.587 111.64 104.896 111.335 104.896 111.026V110.722C105.201 110.108 105.51 109.799 105.51 109.189V108.575Z"
            fill="#ffffff"
          ></path>
        </svg>
      </page-banner>
    </section>
    <section class="section story-section">
      <div class="container">
        <h3 class="title has-text-centered">The Long Live Simple Story</h3>
        <div>
          <p
            class="has-text-left is-size-5"
          >We are the full-service creative company that your small business has been looking for. Whether you're a recent startup, a well-established company, or an entrepreneurial organization or individual looking for a refresh, we offer strategy-based design services to fit your specific business needs.</p>
        </div>
      </div>
    </section>
    <section class="section mission-section">
      <div class="container">
        <div class="content">
          <h3 class="title has-text-centered">Our Mission</h3>
          <p
            class="has-text-left"
          >At Long Live Simple, we craft brands for entrepreneurs and businesses that are both relatable and intentional through custom typography and design services. Here are some of the things we love and the ways we aim to give back through what we do.</p>
        </div>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-three-quarters">
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img src="/img/about/local-features.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Local Features -</strong> In this new series in the works, we’ll be focusing on local professional groups and incredible individuals who make a difference in the Asheville, North Carolina, area.
                  </p>
                </div>
              </div>
            </article>
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img src="/img/about/sustainable-practices.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Sustainable Practices -</strong> Although we do not require sustainable printing of our clients, we highly encourage those we work with to opt for sustainable printing methods, and we take pride in educating our clients on ways they can make a difference through printing methods and more.
                  </p>
                </div>
              </div>
            </article>
            <article class="media">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img src="/img/about/community-focused.png">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Community Focused -</strong> Because we’re centered around our love for community, we showcase our client’s work, highlight our favorite quotes, and offer up ways to give back to others.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
    <!--Meet The Team-->
    <section class="section green-background team-section">
      <div class="container">
        <h3 id="meetTheTeam" class="title">Meet The Team</h3>
        <!--Team Grid-->
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by7">
                  <img src="/img/about/headshots/carley.jpg">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Carley Lee</p>
                    <p class="subtitle is-6">Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by7">
                  <img src="/img/about/headshots/anna.jpg">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Anna Galloway</p>
                    <p class="subtitle is-6">Freelance Graphic Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-5by7">
                  <img src="/img/about/headshots/rob.jpg">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Rob Lindsey</p>
                    <p class="subtitle is-6">Freelance Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--About Carley-->
    <section class="section boss-section">
      <div class="container">
        <div class="content">
          <p
            class="has-text-left is-size-4"
          >Hello there — I’m Carley Lee, the Creative Director here at Long Live Simple, LLC.</p>
          <p
            class="has-text-left"
          >Long Live Simple is a full-service graphic design co. that specializes in branding, web design, print and marketing solutions for local businesses in of Asheville, North Carolina, and the surrounding area. Whether you’re crafting your dream business from the ground up, launching a digital product, or needing a captivating packaging solution, my studio will make sure your business is in great hands.</p>
          <p
            class="has-text-left"
          >With ten years of graphic design and marketing experience, I have gained professional experience with corporate companies to start up entrepreneurs. Each opportunity has enhanced my creativity and led me to my true passion—working one-on-one with clients and their teams. In April 2016, this dream became a reality with the creation of Long Live Simple LLC — a company where I create customized branding experiences and develop brands that resonate with my clients’ target audiences while keeping simplicity and sustainability in the forefront. I’ve been helping brands grow ever since, all the while collaborating with a handful of talented freelancers, and together, we make the identity of each brand stand out in a compelling way.</p>
          <p
            class="has-text-left"
          >While I’ve lived and worked in a variety of east coast cities, including NYC, DC, and Charlotte, NC, I am happy to now call the mountains of Asheville home. When I’m not at the studio or behind my laptop, I’m fueling my soul with my other passions — hiking in the beautiful mountains, exploring art galleries, studying permaculture/gardening, and enjoying precious time with family and friends. Having a studio art background, I am able to articulate my clients’ wishes into memorable and fully customized branding experiences. I value working with each client on each brand I help them to create through Long Live Simple.</p>
        </div>
      </div>
    </section>
    <!--Join Our Team-->
    <!--     <section class="dark-green-background">
      <div class="container">

        <h3 class="title is-spaced white-text">Join our Team</h3>
        <p class="white-text mission is-flex-mobile">
          We’re always looking for amazing designers, content strategists, or local entrepreneurs to work with.
          Come join us! For inquiries or if you’d like to collaborate, email us.
        </p>
        <a
          class="is-hidden-tablet"
          href="mailto:hello@longlivesimple.com?subject=Collaboration"
        >hello@longlivesimple.com.</a>
      </div>

    </section>-->
    <!--Hear Yours-->
    <section class="section your-story-section green-background">
      <div class="container">
        <div class="content">
          <h3 class="title has-text-left-mobile">
            We’ve told you our story — now we’d love to hear
            <span
              class="is-italic has-text-weight-bold"
            >yours!</span>
          </h3>
          <p
            class="has-text-left-mobile is-flex-mobile"
          >Get in touch with us to review your brand story and ideas. Let us help you craft a brand that resonates with your target audience and makes your brand personality shine.</p>
          <div class="columns">
            <div class="column">
              <nuxt-link to="/contact" class="has-text-weight-bold">
                Get in touch with us
                <i class="mdi mdi-chevron-right"></i>
              </nuxt-link>
            </div>
            <div class="column">
              <a href="mailto:hello@longlivesimple.com" class="has-text-weight-bold">
                Set up a free consultation
                <i class="mdi mdi-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageBanner from "../components/PageBanner";
export default {
  name: "about",
  components: { PageBanner },
  data: function() {
    return {
      aboutBanner: {
        text: "About",
        image: "/img/about/about-banner.jpg"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.media {
  border-top: 0;
}
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
.green-background {
  background-color: rgb(226, 241, 234);
}
.dark-green-background {
  background-color: rgb(160, 211, 200);
}
.team-cards {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  .card {
    max-width: 250px;
    box-shadow: unset;
    .card-content p {
      color: #808080;
    }
  }
}
</style>
