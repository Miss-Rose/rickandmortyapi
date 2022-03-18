<template>
  <SearchPanel
    :filters="filters"
    :current="currentFilter"
    @setCurrentFilter="setCurrentFilter"
    @search="search"
  />
  <template v-if="!error.isError">
    <CharacterCardList :filteredData="filteredData" />
    <Pagination :page="page" :totalPages="totalPages" />
  </template>
  <div v-else>Not found</div>
</template>

<script>
import { mapState } from "vuex";
import CharacterCardList from "@/components/CharacterCardList";
import SearchPanel from "@/components/SearchPanel";
import actions from "@/store/actions";
import { FILTERS } from "@/shared/consts";
import { selectItemByFilter } from "@/shared/selectors";
import Pagination from "@/components/Pagination";
import { watchEffect } from "vue";
import router from "@/router";

export default {
  name: "Home",
  components: { Pagination, CharacterCardList, SearchPanel },
  data() {
    return {
      filters: FILTERS,
      currentFilter: {},
    };
  },
  computed: {
    ...mapState({
      characters: (state) => state.characters,
      active: (state) => state.currentFilter,
      error: (state) => state.error,
      totalPages: (state) => state.totalPages,
    }),
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    filteredData() {
      return this.active.name !== "All"
        ? selectItemByFilter(this.characters, this.active)
        : this.characters;
    },
  },
  created() {
    watchEffect(() => {
      this.$store.dispatch(actions.GET_CHARACTERS, this.page);
    });
    this.currentFilter = this.active;
  },
  methods: {
    setCurrentFilter(filter) {
      router.push({ query: { page: "1" } });
      this.currentFilter = filter;
      this.$store.dispatch(actions.CHANGE_FILTER, this.currentFilter);
    },
    search(name) {
      this.$store.dispatch(actions.UPDATE_SEARCH_NAME, name);
    },
  },
};
</script>

<style lang="scss"></style>
