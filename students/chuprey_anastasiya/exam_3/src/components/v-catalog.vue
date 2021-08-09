<template>
  <div class="v-catalog">
    <div class="v-catalog__bg"></div>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <p class="v-catalog__modal">
      Life is sweet
      <a class="v-catalog__modal-link" href="#shop">Shop now</a>
    </p>
    <b-container>
      <b-row>
        <h1 id="shop" class="v-catalog__title">Catalog</h1>

        <div class="v-catalog__list">
          <v-catalog-item
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
          />
        </div>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import vCatalogItem from "./v-catalog-item";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  props: {},

  data() {
    return {};
  },
  computed: { ...mapGetters(["PRODUCTS", "CART"]) },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arriwed");
      }
    });
  },
};
</script>


<style lang="scss">
.v-catalog {
  position: relative;
  transition: 1s ease-in;

  &__modal {
    position: absolute;
    right: 80px;
    top: 350px;
    background-color: #fdb37d;
    padding: 30px 50px 50px;
    color: white;
    font-size: 27px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  &__modal-link {
    letter-spacing: 4px;
    margin-top: 20px;
    font-size: 17px;
    font-family: 300;
    display: block;
    text-decoration: none;
    padding: 5px 15px;

    text-align: center;
    color: white;
    background-color: black;
    transition: all 1s ease;
    text-transform: uppercase;

    &:hover {
      transition: all 1s ease;

      background-color: white;
      color: black;
    }
  }
  &__bg {
    min-height: 100vh;
    margin-bottom: 20px;
    background-image: url(../../src/assets/images/bg-3.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-position-y: -50em;
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link-to-cart {
    position: fixed;
    top: 170px;
    right: 0;
    padding: 14px;
    border-radius: 5px;
    background-color: #c9cfae;
    color: white;
    transition: all 0.7s ease-in-out;

    &:hover {
      background-color: #a8b58b;
    }
  }

  &__title {
    padding-top: 90px;
    font-size: 70px;
    color: #d0c975;
    text-align: center;
    margin-bottom: 30px;
    position: relative;
    @include line-before-upper(#a8b58b, -10px);
  }
}
</style>
