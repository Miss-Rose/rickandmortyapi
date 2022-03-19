<template>
  <button id="btn" :class="{ light: isClicked, dark: !isClicked }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    title: {
      type: String,
    },
    isClicked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
.light {
  background-color: white;
  border: 1px solid #657483;
  padding: 5px;

  &:hover {
    color: #24292f;
    background-color: white;
    border: 1px solid #657483;
    cursor: pointer;
  }
}

.dark {
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
