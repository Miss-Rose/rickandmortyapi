<template>
  <div class="card-container">
    <div v-for="ch in filteredData" :key="ch.id">
      <CharacterCard :character="ch" />
    </div>
  </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard";

export default {
  name: "CharacterCardList",
  components: { CharacterCard },
  props: ["filteredData"],
};
</script>

<style lang="scss">
.card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
