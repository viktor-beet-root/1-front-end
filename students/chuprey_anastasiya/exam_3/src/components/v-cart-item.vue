<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <span>
        <span class="quantity__btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="quantity__btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="v-cart-item__delete-btn" @click="deleteFromCart">
      Delete
    </button>
  </div>
</template>


<script>
export default {
  name: "v-cart-item",
  props: {
    cart_item_data: {
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
  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },

    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  // mounted() {
  //   this.$set(this.cart_item_data, "quantity", 1);
  // },
};
</script>

 <style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  // box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
  color: #868864;
  font-size: 20px;
  text-transform: uppercase;
  border-bottom: 3px solid white;

  &__image {
    max-width: 150px;
    border-radius: 7px;
    padding: 10px;
    border: 1px solid #ced0b1;
  }
  &__delete-btn {
    color: #868864;
    border-radius: 7px;
    padding: 5px;
    background-color: transparent;
    border: 3px solid #868864;
    transition: all 0.7s ease-in-out;
    text-transform: uppercase;
    &:hover {
      background-color: #868864;
      color: white;
    }
  }
  .quantity__btn {
    cursor: pointer;
  }
}
</style>>

