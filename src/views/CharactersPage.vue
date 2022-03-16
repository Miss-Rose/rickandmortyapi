<template>
  <SearchPanel
    :filters="filters"
    :current="currentFilter"
    @setCurrentFilter="setCurrentFilter"
    @search="search"
  />
  <CharacterCardList :filteredData="filteredData" />
  <Pagination :page="page" :totalPages="totalPages" />
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CharacterCardList from "@/components/CharacterCardList";
import SearchPanel from "@/components/SearchPanel";
import actions from "@/store/actions";
import { FILTERS } from "@/shared/consts";
import { selectItemByFilter } from "@/shared/selectors";
import Pagination from "@/components/Pagination";
import { watchEffect } from "vue";

export default {
  name: "Home",
  components: { Pagination, CharacterCardList, SearchPanel },
  data() {
    return {
      filters: FILTERS,
      currentFilter: {},
      searchName: "",
    };
  },
  computed: {
    ...mapState({
      characters: (state) => {
        console.log(state.characters);
        return state.characters;
      },
      active: (state) => state.currentFilter,
    }),
    ...mapGetters(["totalPages"]),
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    filteredData() {
      console.log("searchName", this.searchName);
      if (this.active.name !== "All") {
        console.log("DATA", this.data);
        return selectItemByFilter(this.characters, this.active);
      } else {
        return this.characters;
      }
    },
  },
  created() {
    watchEffect(() => {
      this.$store.dispatch(actions.GET_CHARACTERS, this.page);
    });
    this.currentFilter = this.active;
    this.data = this.characters;
  },
  methods: {
    setCurrentFilter(filter) {
      this.currentFilter = filter;
      console.log("this.currentFilter", this.currentFilter);
      this.$store.dispatch(actions.CHANGE_FILTER, this.currentFilter);
      this.$router.push(`/?page=1`);
    },
    search(name){
      this.$store.dispatch(actions.UPDATE_SEARCH_NAME, name);
    },
  },
};
</script>

<style lang="scss"></style>
