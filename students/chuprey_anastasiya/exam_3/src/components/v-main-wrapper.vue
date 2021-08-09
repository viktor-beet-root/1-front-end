<template>
  <div class="v-main-wrapper"></div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  name: "v-main-wrapper",
  props: {}, //властивості яки прйшли від батьків
  data() {
    //властивості цього компоненту
    return {
      title: "Online shop",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  }, //cвойства которие вичисляються
  methods: {}, //те що відловлює дії користувача
  watch: {},
  mounted() {},
};
</script>



<style lang="scss">
.v-main-wrapper {
  // max-width: 900px;
  // margin: 0 auto;
}
</style>
