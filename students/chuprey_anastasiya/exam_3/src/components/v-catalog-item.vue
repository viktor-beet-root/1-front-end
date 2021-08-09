<template>
  <b-col class="v-catalog-item" xl="3" lg="4" md="6" sm="12">
    <div class="v-catalog-item__image-wrap">
      <img
        class="v-catalog-item__image"
        :src="require('../assets/images/' + product_data.image)"
        alt="img"
      />
    </div>

    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">{{ product_data.price }} uah.</p>
    <!-- <button class="v-catalog-item__add-to-cart-btn btn" @click="addToCart">
      Add to cart
    </button> -->
    <button class="v-catalog-item__add-to-cart-btn" @click="addToCart">
      Add to cart
    </button>
  </b-col>
</template>


<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>


<style lang="scss">
.v-catalog-item {
  display: flex;
  flex-direction: column;
  // flex-basis: 25%;
  // box-shadow: 0 0 2px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;

  &__image-wrap {
    height: 400px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  &__image {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  &__name,
  &__price {
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    color: #a8b58b;
    height: 70px;
    overflow: hidden;
  }
  // &__price {
  //   text-align: center;
  // }

  &__add-to-cart-btn {
    padding: 5px 10px;
    // border-radius: 10px;
    border: 1px solid #a8b58b;
    color: #a8b58b;
    text-transform: uppercase;
    text-align: center;
    background-color: transparent;
    transition: all 0.7s ease;
    &:hover {
      background-color: #a8b58b;
      color: white;
    }
  }
}
</style>
