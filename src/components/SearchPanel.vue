<template>
  <div id="search-panel">
    <div class="filters">
      <div
        v-for="filter in filters"
        :key="filter.id"
        @click="setActiveFilter(filter)"
        :class="{ active: filter.id === current.id }"
      >
        {{ filter.name }}
      </div>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="Search by name..."
        v-model="value"
        @input="search"
      />
      <CustomButton @click="search">Search</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/shared/CustomButton";

export default {
  name: "SearchPanel",
  props: ["filters", "current"],
  components: { CustomButton },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    setActiveFilter(filter) {
      this.$emit("setCurrentFilter", filter);
    },
    search() {
      this.$emit("search", this.value);
    },
  },
};
</script>
<style lang="scss">
@import "../shared/library";

#search-panel {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: $lightGray;
  padding: 20px;

  .filters {
    display: flex;
    flex-direction: row;
    color: $dark;
    border-radius: $border-radius;
    border: 1px solid $dark;

    div {
      cursor: pointer;
      padding: 10px;

      &.active {
        background-color: $dark;
        color: $light;
      }
    }
  }

  .search {
    border: 1px solid $dark;
    border-radius: $border-radius;
    display: flex;
    flex-wrap: nowrap;
    margin-left: 10%;

    input {
      border: none;
      padding: 13px;
      font-size: 15px;
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  }
}
</style>
