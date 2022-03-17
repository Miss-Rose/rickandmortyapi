<template>
  <div class="pages-nav">
    <div>Page {{ page }} of {{ totalPages }}</div>
    <div v-if="totalPages > 1">
      <router-link
        :to="{ name: 'CharactersPage', query: { page: page - 1 } }"
        rel="prev"
        v-if="page !== 1"
        @click="scroll"
      >
        &lt;&lt;Prev page
      </router-link>

      <router-link
        :to="{ name: 'CharactersPage', query: { page: page + 1 } }"
        rel="next"
        @click="scroll"
        v-show="page !== totalPages"
      >
        Next page >>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["page", "totalPages"],
  methods: {
    scroll() {
      window.scrollTo(0, 0);
      return false;
    },
  },
};
</script>

<style lang="scss"></style>
