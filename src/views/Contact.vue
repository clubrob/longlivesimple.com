<template>
  <div class="work">
  <section class="hero hero-image  is-medium">
      <div class="hero-body hero-background-image">
        <div class="container">
          <h1 class="title">

          </h1>
          <h2 class="subtitle">

          </h2>
        </div>
      </div>
    </section>
    <br>
    <section>
      <div class="container is-fluid">
      <h3 style="padding-top: 1em" class="title grey-text">  <b>Contact Our Studio</b></h3>
        <p>Every business or entrepreneur has a story to tell—let’s tell yours.
          <br>
          Get in touch with us by filling out our form below. We will be in touch within 1-2 business days.</p>
        <br>
      <form action="https://formspree.io/hello@longlivesimple.com"
            method="POST">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label grey-text">Name</label>
          </div>
          <div class="field-body">
            <div class="field is-grouped">
              <p class="control is-expanded has-icons-left">
                <input class="input is-primary" type="text" name="name" placeholder="First and Last Name">
                <span class="icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left has-icons-right">
                <input class="input is-primary" type="email" placeholder="Email" name="_replyto">
                <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
                <span class="icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label grey-text">Subject</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input is-primary" type="text" placeholder="e.g. Partnership opportunity" name="subject">
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label grey-text">Inquiry</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea is-primary" placeholder="Tell us about your creative project or company" name="Services"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button" type="submit" value="Send">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      </div>
      <br>
    </section>
</div>
</template>
<script>
  export default {
    name: 'Contact'
  }
</script>
<style scoped>
  .hero-background-image {
    background: url("../../static/img/CONTACT/CONTACT_hero.png") center;
    background-size: cover;
  }
  .grey-text {
    color: grey;
  }
  .input.is-primary, textarea.is-primary {
    border-color: #dbdbdb;
  }
</style>
