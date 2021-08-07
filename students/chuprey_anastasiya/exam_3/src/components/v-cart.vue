<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-to-cart">Back to catalog</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="v-cart__total-name">Total:</p>
      <p>{{ cartTotalCost }} uah.</p>
    </div>
  </div>
</template>


<script>
import vCartItem from "./v-cart-item";
import { mapActions } from "vuex";
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.quantity * item.price);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>


<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    background-color: rgb(250, 126, 198);
    color: white;
    font-size: 20px;
  }
  &__total-name {
    margin-right: 16px;
  }
}
</style>
