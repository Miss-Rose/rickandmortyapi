<template>
  <div>
    <h2>{{ error.msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "ErrorMsg",
  props: ["error"],
};
</script>

<style scoped></style>
