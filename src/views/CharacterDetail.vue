<template>
  <div class="detail-page" v-if="character">
    <div class="description">
      <h2>{{ character.name }}</h2>
      <div>
        <span>{{ character.species }} - </span>
        <span>{{ character.status }}</span>
      </div>
      <div>Last known location: {{ character.location.name }}</div>
      <div>First seen in: {{ character.episode }}</div>
      <button>Add/Remove</button>
    </div>
    <div class="image">
      <img :src="character.image" alt="image" />
    </div>
  </div>
  <div v-else>not found</div>
</template>
<script>
import { mapState } from "vuex";
import actions from "@/store/actions";

export default {
  name: "CharacterDetail",
  date() {
    return {
      episode: null,
    };
  },
  created() {
    this.$store.dispatch(actions.GET_CHARACTER, this.pageId);
  },
  computed: {
    ...mapState({
      character: (state) => state.character,
    }),
    pageId() {
      return parseInt(this.$route.params.id) || null;
    },
  },
};
</script>

<style lang="scss">
@import "../shared/library";

.detail-page {
  display: flex;
  flex-direction: row;
  width: 75%;
  height: 100%;
  border: 1px solid $dark;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0;
  flex-wrap: wrap-reverse;

  .description {
    padding-left: 20px;
    text-align: left;
  }

  .image {
    height: 300px;
  }
}
</style>
