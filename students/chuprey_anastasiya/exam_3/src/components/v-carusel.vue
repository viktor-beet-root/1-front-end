<template>
  <div class="container v-carusel">
    <div class="row">
      <div class="col-12">
        <p class="v-carusel__title">About us</p>
      </div>
    </div>
    <div class="row">
      <div class="v-carusel__left col-6">
        <VueSlickCarousel v-bind="settings">
          <v-carusel-item
            v-for="item in carusel_data"
            :key="item.id"
            :item_data="item"
          />
        </VueSlickCarousel>
      </div>
      <div class="v-carusel__right col-6">
        <h2 class="v-carusel__right-title">Our Products</h2>
        <p class="v-carusel__right-text">
          Handmade at our very own confectionary, our macarons make delightful
          desserts for festive parties or a fun treat for yourself and a friend.
          At around 80 calories each and made with no gluten containing
          ingredients, these sweet treats are great for sharing and offering as
          a gift for any occasion.
        </p>
        <p class="v-carusel__right-text">
          The Macaron shop macaron menu includes colorful confections, available
          in 20 flavors. Beyond our signature macarons, our luscious menu
          selection includes gourmet chocolates, creamy French gelato, specialty
          European style coffees, classic French pastries and homemade candies.
          You will want to come back often to experience our limited-time
          seasonal macaron flavors and fresh seasonal offerings.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import vCaruselItem from "./v-carusel-item";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "v-carusel",
  components: { vCaruselItem, VueSlickCarousel },
  props: {
    carusel_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        autoplay: true,
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
.v-carusel {
  padding: 100px 0 100px;

  &__title {
    font-size: 70px;
    color: #d0c975;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
    @include line-before-upper(#a8b58b, -10px);
  }
  &__right-title {
    color: #745f84;
    margin-bottom: 20px;
    font-size: 35px;
    padding-left: 10px;
  }

  &__right-text {
    padding-right: 10px;
    padding-left: 10px;
    text-align: justify;
  }
}
</style>
