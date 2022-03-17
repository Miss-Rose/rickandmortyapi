<template>
  <div>
    <div>
      <img src="" />
    </div>
    <div>
      <h4>{{ character.name }}</h4>
      <div>{{ character.species }} - {{ character.status }}</div>
      <div>Last known location: {{ character.location.name }}</div>
      <div>First seen in {{ character.episode }}</div>
      <button>Add/Remove</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "CharacterDetail",
  computed: {
    ...mapState({
      character: (state) => state.character,
    }),
  },
};
</script>

<style scoped></style>
