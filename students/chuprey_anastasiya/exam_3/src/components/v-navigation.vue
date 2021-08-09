<template>
  <div class="v-navigation" :class="{ onScroll: !view.topOfPage }">
    <nav class="v-navigation__nav nav">
      <div class="nav__logo">
        <img
          class="nav__logo-img"
          src="../../src/assets/images/logo.png"
          alt="logo"
        />
      </div>
      <ul class="nav__menu menu">
        <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Catalog</a></li>
        <li class="menu__item"><a class="menu__link" href="#">About as</a></li>
        <li class="menu__item"><a class="menu__link" href="#">Cart</a></li>
      </ul>
      <div class="nav__search">
        <input
          class="nav__search-input"
          type="text"
          name=""
          id=""
          placeholder="Find macarons..."
        />
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "v-navigation",
  props: {},
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>



<style lang="scss">
.v-navigation {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  z-index: 10000;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: ease-in-out 0.6s;
}
.onScroll {
  background-color: white;
}
.nav {
  padding: 5px 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &__logo {
    padding-left: 20px;
  }
  &__logo-img {
    width: 70%;
  }

  &__search {
  }
  &__search-input {
    max-width: 300px;
    width: 100%;
    border: none;
    padding: 5px 10px;
    background-color: #a8b58b;
    &::placeholder {
      color: white;
      font-size: 14px;
      text-transform: uppercase;
    }

    &:focus {
      outline-color: #f08ba3;
    }
  }
}
.menu {
  display: flex;
  list-style: none;
  transition: all 0.7 ease-in-out;
  &__item {
    padding: 0px 30px;
  }
  &__link {
    text-decoration: none;
    text-transform: uppercase;
    color: $color-black;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    font-size: 21px;
    &::after {
      content: "";
      display: block;
      visibility: hidden;
      width: 100%;
      height: 2px;
      background-color: #bdda70;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      color: white;
    }
    &:hover::after {
      visibility: visible;
    }
  }
}
</style>
