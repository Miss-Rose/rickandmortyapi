<template>
  <div id="nav">
    <div class="links">
      <router-link to="/">CharactersPage</router-link> |
      <router-link to="/about">Favourites</router-link>
    </div>
    <Counter class="counter" />
  </div>
</template>

<script>
import Counter from "@/components/Counter";

export default {
  name: "Navigation",
  components: { Counter },
};
</script>

<style lang="scss">
@import "../shared/library";
#nav {
  background-color: $dark;
  display: flex;
  justify-content: space-between;
  padding: 30px;

  a {
    font-weight: bold;
    color: $notActive;
    text-decoration: none;

    &.router-link-exact-active {
      color: $light;
    }
  }
}
</style>
