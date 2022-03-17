import { createStore } from "vuex";
import CardServices from "@/services/CardServices";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

export default createStore({
  state: {
    characters: [],
    totalPages: 0,
    currentFilter: { id: 0, name: "All" },
    searchName: "",
    error: {
      isError: false,
      msg: "",
    },
  },
  mutations: {
    [mutations.UPDATE_CHARACTERS](state, payload) {
      state.characters = payload;
    },
    [mutations.UPDATE_TOTAL_PAGES](state, payload) {
      state.totalPages = payload;
    },
    [mutations.UPDATE_CURRENT_FILTER](state, payload) {
      state.currentFilter = payload;
    },
    [mutations.SET_SEARCH_NAME](state, payload) {
      state.searchName = payload;
      console.log("SEARCH NAME", state.searchName);
    },
  },
  actions: {
    [actions.GET_CHARACTERS]: async ({ commit, state }, payload) => {
      const template = `/character/?page=${payload}&name=${state.searchName}`;

      const url =
        state.currentFilter.name === "All"
          ? template
          : `${template}&species=${state.currentFilter.name}`;
      try {
        const { data } = await CardServices.get(url);
        console.log("DATA", data);
        commit("UPDATE_CHARACTERS", data.results);
        commit("UPDATE_TOTAL_PAGES", data.info.pages);
        state.error = {
          isError: false,
          msg: "",
        };
      } catch (e) {
        state.error = {
          isError: true,
          msg: "Object not found",
        };
      }
    },
    [actions.CHANGE_FILTER]: ({ commit }, payload) => {
      commit("UPDATE_CURRENT_FILTER", payload);
    },
    [actions.UPDATE_SEARCH_NAME]: ({ commit }, payload) => {
      commit("SET_SEARCH_NAME", payload);
    },
  },
  modules: {},
  getters: {
    totalPages(state) {
      return state.totalPages;
    },
  },
});
