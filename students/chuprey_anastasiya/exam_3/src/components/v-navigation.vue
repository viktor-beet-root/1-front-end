<template>
  <div class="v-navigation" :class="{ onScroll: !view.topOfPage }">
    <nav class="v-navigation__nav nav">
      <div class="nav__logo">
        <a href="#home"
          ><img
            class="nav__logo-img"
            src="../../src/assets/images/logo.png"
            alt="logo"
        /></a>
      </div>
      <ul class="nav__menu menu">
        <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
        <li class="menu__item">
          <a class="menu__link" href="#shop">Catalog</a>
        </li>
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
        <div class="nav__search-svg-wrap">
          <svg
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path
              d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"
            />
          </svg>
        </div>
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
  padding: 5px 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    padding-left: 20px;
  }
  &__logo-img {
    width: 70%;
  }

  &__search {
    display: flex;
    background-color: #a8b58b;
  }
  &__search-svg-wrap {
    padding: 3px 5px 0px 0px;
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
      color: #bdda70;
    }
    &:hover::after {
      visibility: visible;
    }
  }
}
</style>
