<template>
  <div id="nav">
    <div class="links">
      <router-link to="/">CharactersPage</router-link> |
      <router-link to="/favourites">Favourites</router-link>
    </div>
    <Counter class="counter" :counter="counter" />
  </div>
</template>

<script>
import Counter from "@/components/Counter";
import { mapState } from "vuex";

export default {
  name: "Navigation",
  components: { Counter },
  computed: {
    ...mapState({
      counter: (state) => state.favouriteCount,
    }),
  },
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
