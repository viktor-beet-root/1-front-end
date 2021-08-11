<template>
  <div id="app">
    <v-navigation-mobile :class="{ open: showNav }" />
    <div class="top-bar">
      <div id="navigation-icon">
        <span v-if="mobileWiew" @click="showNav = !showNav"
          ><svg viewBox="0 0 100 100" width="50px" height="50px">
            <path
              fill="#a1d3a2"
              d="M17 45H83V55H17zM17 68H83V78H17zM17 22H83V32H17z"
            />
            <path
              fill="#1f212b"
              d="M83 56H17c-.552 0-1-.448-1-1V45c0-.552.448-1 1-1h66c.552 0 1 .448 1 1v10C84 55.552 83.552 56 83 56zM18 54h64v-8H18V54zM83 79H17c-.552 0-1-.448-1-1V68c0-.552.448-1 1-1h66c.552 0 1 .448 1 1v10C84 78.552 83.552 79 83 79zM18 77h64v-8H18V77zM83 33H17c-.552 0-1-.448-1-1V22c0-.552.448-1 1-1h66c.552 0 1 .448 1 1v10C84 32.552 83.552 33 83 33zM18 31h64v-8H18V31z"
            />
            <path
              fill="#1f212b"
              d="M73.5 29H17c-.276 0-.5-.224-.5-.5S16.724 28 17 28h56.5c.276 0 .5.224.5.5S73.776 29 73.5 29zM78.5 29h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S78.776 29 78.5 29zM82.5 75h-56c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h56c.276 0 .5.224.5.5S82.776 75 82.5 75zM23.5 75h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S23.776 75 23.5 75zM67.5 52h-45c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h45c.276 0 .5.224.5.5S67.776 52 67.5 52zM78.5 52h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S78.776 52 78.5 52zM73.5 52h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5S73.776 52 73.5 52z"
            /></svg
        ></span>
      </div>
      <v-navigation v-if="!mobileWiew" />
    </div>
    <v-main-wrapper id="content" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import vNavigation from "./components/v-navigation.vue";
import vNavigationMobile from "./components/v-navigation-mobile.vue";
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
    vNavigationMobile,
    vMainWrapper,
  },
  methods: {
    handleWiew() {
      this.mobileWiew = window.innerWidth <= 1000;
    },
  },
  created() {
    this.handleWiew();
    window.addEventListener("resize", this.handleWiew);
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
#content {
}
.open {
  transform: translateY(10px);
}
// .top-bar {
//   display: flex;
//   width: 100%;
//   &__menu-btn {
//   }
// }

#navigation-icon {
  padding: 10px 10px 20px;

  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20000;
}
</style>
