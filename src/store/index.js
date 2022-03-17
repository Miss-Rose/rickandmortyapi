import { createStore } from "vuex";
import CardServices from "@/services/CardServices";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

export default createStore({
  state: {
    characters: [],
    character: {},
    totalPages: 0,
    currentFilter: { id: 0, name: "All" },
    searchName: "",
    error: {
      isError: false,
      msg: "",
    },
  },
  mutations: {
    [mutations.SET_CHARACTERS](state, payload) {
      state.characters = payload;
    },
    [mutations.SET_TOTAL_PAGES](state, payload) {
      state.totalPages = payload;
    },
    [mutations.UPDATE_CURRENT_FILTER](state, payload) {
      state.currentFilter = payload;
    },
    [mutations.SET_SEARCH_NAME](state, payload) {
      state.searchName = payload;
    },
    [mutations.SET_CHARACTER](state, payload) {
      state.character = payload;
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
        commit("SET_CHARACTERS", data.results);
        commit("SET_TOTAL_PAGES", data.info.pages);
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
    [actions.GET_CHARACTER]: async ({ commit, state }, payload) => {
      const data = state.characters.find(({ id }) => id === payload);
      console.log("DATA char", data);
      commit("SET_CHARACTER", data);
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
