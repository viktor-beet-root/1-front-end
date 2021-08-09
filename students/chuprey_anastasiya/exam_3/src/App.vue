<template>
  <div id="app">
    <div class="top-bar">
      <div id="navigation-icon" v-if="mobileWiew">
        <span>MENU</span>
      </div>
      <v-navigation v-if="!mobileWiew" />
    </div>
    <v-main-wrapper />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import vNavigation from "./components/v-navigation.vue";
import vMainWrapper from "./components/v-main-wrapper";

export default {
  name: "app",
  data() {
    return {
      mobileWiew: true,
      showNav: false,
    };
  },
  components: {
    vNavigation,
    vMainWrapper,
  },
  methods: {
    handleWiew() {
      this.mobileWiew = window.innerWidth <= 1000;
    },
  },
  created() {
    this.handleWiew();
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700;800&display=swap");
</style>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  position: relative;
  overflow: hidden;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
}
.top-bar {
  display: flex;
  width: 100%;
  &__menu-btn {
    color: rgb(171, 241, 100);
    font-size: 20px;
  }
}

#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
}
</style>
