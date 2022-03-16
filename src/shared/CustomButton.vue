<template>
  <button id="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
#btn {
  color: white;
  background-color: #24292f;
  border: none;
  padding: 5px;

  &:hover {
    color: #24292f;
    background-color: white;
    border: 1px solid #657483;
    cursor: pointer;
  }
}
</style>
