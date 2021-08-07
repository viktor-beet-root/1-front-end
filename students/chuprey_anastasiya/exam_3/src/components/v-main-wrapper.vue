<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
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



<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
