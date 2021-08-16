<template>
  <div class="v-contact">
    <b-container>
      <b-row>
        <b-col xl="6">
          <p class="v-contact__title">Contact us</p>
          <div class="v-contact__content-wrapper content-wrapper">
            <p class="content-wrapper__adress">
              <svg
                class="content-wrapper__svg"
                width="14px"
                height="14px"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#7e5aff"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
              91 Nolan Extensions Suite 670
            </p>
            <a class="content-wrapper__tel" href="tel:+001356-868-2454">
              <svg
                class="content-wrapper__svg"
                width="14px"
                height="14px"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#7e5aff"
                  d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                ></path>
              </svg>

              +380 96-868-2854</a
            >
            <a class="content-wrapper__email" href="macaroooon@gmail.com">
              <svg
                class="content-wrapper__svg"
                width="14px"
                height="14px"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 576 512"
              >
                <path
                  fill="#7e5aff"
                  d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"
                ></path>
              </svg>

              macaroooon@gmail.com</a
            >
            <p class="content-wrapper__time">
              <svg
                class="content-wrapper__svg"
                width="16px"
                height="14px"
                aria-hidden="true"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#7e5aff"
                  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                ></path>
              </svg>
              From 08:00 to 20:00
            </p>
          </div>
        </b-col>
        <b-col xl="6">
          <v-google-maps />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import vGoogleMaps from "./v-google-maps.vue";
export default {
  name: "v-contact",
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {},
  components: { vGoogleMaps },
};
</script>



<style lang="scss">
.v-contact {
  &__title {
    font-size: 50px;
    color: #add075;
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    @include line-before-upper(#a8b58b, -10px);
  }

  &__content-wrapper {
  }
}
.content-wrapper {
  padding: 50px 10px 100px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  &__adress {
  }

  &__svg {
    display: inline-block;
    margin-right: 10px;
  }

  &__tel {
    display: block;
    text-decoration: none;
  }

  &__email {
    display: block;
    text-decoration: none;
  }

  &__time {
  }
}
</style>
