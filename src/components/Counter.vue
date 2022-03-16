<template>
  <div id="counter">
    <img src="../assets/heart.svg" alt="add to favourite" class="heart"/>
    <span>1</span>
  </div>
</template>

<script>
export default {
  name: "Counter",
};
</script>

<style lang="scss">
#counter {
  color: white;
  display: flex;

  .heart {
    width: 20px;
    height: 20px;
    padding-right: 5px;
  }
}
</style>
