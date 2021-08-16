<template>
  <div class="v-carusel-item">
    <div class="v-carusel__img-wrapper">
      <img
        class="v-carusel-item__img"
        :src="require('../assets/images/' + item_data.img)"
        alt="img"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "v-carusel-item",
  props: {
    item_data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  components: {},
  computed: {},
};
</script>

<style lang="scss">
</style>
