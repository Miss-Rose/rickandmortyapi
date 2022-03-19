<template>
  <div class="character-card" @click="setId">
    <img :src="character.image" alt="image" />
    <h4>{{ character.name }}</h4>
    <div>
      <span>{{ character.species }} - </span>
      <span>{{ character.status }}</span>
    </div>
    <CustomButton
      v-if="!isLiked"
      @click.stop="addToFavourite"
      :isClicked="isLiked"
      >Add To Favourites</CustomButton
    >
    <CustomButton v-else @click.stop="removeFromFavourite" :isClicked="isLiked"
      >Remove From Favourites</CustomButton
    >
  </div>
</template>

<script>
import CustomButton from "@/shared/CustomButton";
import actions from "@/store/actions";
import { mapState } from "vuex";

export default {
  name: "CharacterCard",
  components: { CustomButton },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      favouriteList: (state) => state.favouriteList,
    }),
    isLiked() {
      return this.favouriteList.some(({ id }) => id === this.character.id);
    },
  },
  methods: {
    setId() {
      this.$router.push(`/character/${this.character.id}`);
    },
    addToFavourite() {
      this.$store.dispatch(actions.ADD_TO_FAVOURITE, this.character);
    },
    removeFromFavourite() {
      this.$store.dispatch(actions.REMOVE_FROM_FAVOURITE, this.character.id);
    },
  },
};
</script>

<style lang="scss">
@import "../shared/library";

.character-card {
  display: inline-block;
  border: 1px solid darkslategray;
  border-radius: $border-radius;
  max-width: 280px;
  margin: 10px 10px;

  img {
    width: 280px;
    height: 280px;
  }

  h4 {
    margin: 5px 0;
  }

  button {
    margin: 5px 0 10px;
    border-radius: 3px;
  }
}
</style>
