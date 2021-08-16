<template>
  <div class="v-navigation-mob">
    <nav class="v-navigation-mob__nav-mob nav-mob">
      <div class="nav-mob__logo">
        <a href="#home"
          ><img
            class="nav__logo-img"
            src="../../src/assets/images/logo.png"
            alt="logo"
        /></a>
      </div>
      <div class="nav-mob__search">
        <input
          class="nav-mob__search-input"
          type="text"
          name=""
          placeholder="Find macarons..."
        />
        <div class="nav-mob__search-svg-wrap">
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
      <ul class="nav-mob__menu-mob menu-mob">
        <li class="menu-mob__item">
          <a class="menu-mob__link" href="#home">Home</a>
        </li>
        <li class="menu-mob__item">
          <a class="menu-mob__link" href="#shop">Catalog</a>
        </li>
        <li class="menu-mob__item">
          <a class="menu-mob__link" href="#">About as</a>
        </li>
        <li class="menu-mob__item">
          <a class="menu-mob__link" href="#">Cart</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: "v-navigation",
  props: {},
  data() {
    return {};
  },
};
</script>



<style lang="scss">
.v-navigation-mob {
  position: fixed;
  width: 40%;
  top: 0;
  left: 10px;
  transform: translateY(-400px);

  z-index: 10000;
  overflow-x: hidden;
  overflow-y: hidden;
  transition: ease-in-out 0.9s;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
}

.nav-mob {
  padding: 0px 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  background-color: white;

  &__logo {
    padding-left: 20px;
  }
  &__logo-img {
    width: 70%;
  }

  &__search {
    display: flex;
    background-color: #a8b58b;
    margin-bottom: 20px;
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
.menu-mob {
  display: flex;
  flex-direction: column;
  list-style: none;
  transition: all 0.7 ease-in-out;
  padding-bottom: 10px;
  &__item {
    padding: 15px 0px 0px;
  }
  &__link {
    text-decoration: none;
    text-transform: uppercase;
    color: $color-black;
    transition: all 0.3s ease-in-out;
    font-weight: 600;

    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
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
