<template>
  <div>
    <h2>{{ error.msg }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ErrorMsg",
  computed: {
    ...mapState({
      error: (state) => state.error,
    }),
  },
};
</script>

<style scoped></style>
