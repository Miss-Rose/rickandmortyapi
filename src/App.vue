<template>
  <div>
    <Navigation />
  </div>
  <router-view />
</template>

<script>
import Navigation from "@/components/Navigation";
import actions from "@/store/actions";

export default {
  components: {
    Navigation,
  },
  mounted() {
    this.$store.dispatch(actions.GET_FAVOURITE_LIST);
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
