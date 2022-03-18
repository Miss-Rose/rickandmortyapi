<template>
  <div class="character-card" @click="setId">
    <img :src="character.image" alt="image" />
    <h4>{{ character.name }}</h4>
    <div>
      <span>{{ character.species }} - </span>
      <span>{{ character.status }}</span>
    </div>
    <CustomButton>Add To Favourites</CustomButton>
  </div>
</template>

<script>
import CustomButton from "@/shared/CustomButton";
export default {
  name: "CharacterCard",
  components: { CustomButton },
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setId() {
      this.$router.push(`/character/${this.character.id}`);
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
