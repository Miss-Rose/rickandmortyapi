<template>
  <div>
    <CharacterCardList :data="characters" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CharacterCardList from "@/components/CharacterCardList";

export default {
  name: "FavouritesPage",
  components: { CharacterCardList },
  computed: {
    ...mapState({
      characters: (state) => state.favouriteList,
    }),
  },
};
</script>

<style scoped></style>
