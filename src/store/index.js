import { createStore } from "vuex";
import CardServices from "@/services/CardServices";
import actions from "@/store/actions";
import mutations from "@/store/mutations";

export default createStore({
  state: {
    characters: [],
    character: null,
    totalPages: 0,
    currentFilter: { id: 0, name: "All" },
    searchName: "",
    error: {
      isError: false,
      msg: "",
    },
    favouriteList: [],
    favouriteCount: 0,
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
    [mutations.SET_FAVOURITE](state, payload) {
      state.favouriteList = payload;
    },
    [mutations.SET_FAVOURITE_COUNT](state, payload) {
      state.favouriteCount = payload;
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
          msg: "Characters not found",
        };
      }
    },
    [actions.GET_CHARACTER]: async ({ commit, state }, payload) => {
      const character = state.characters.find(({ id }) => id === payload);
      if (character) {
        const { data } = await CardServices.get(character.episode[0]);
        commit("SET_CHARACTER", { ...character, episode: data.name });
      } else {
        try {
          const character = await CardServices.get(`/character/${payload}`);
          const { data } = await CardServices.get(character.data.episode[0]);
          commit("SET_CHARACTER", { ...character.data, episode: data.name });
        } catch (e) {
          state.error = {
            isError: true,
            msg: "Character not found",
          };
        }
      }
    },
    [actions.CHANGE_FILTER]: ({ commit }, payload) => {
      commit("UPDATE_CURRENT_FILTER", payload);
    },
    [actions.UPDATE_SEARCH_NAME]: ({ commit }, payload) => {
      commit("SET_SEARCH_NAME", payload);
    },
    [actions.ADD_TO_FAVOURITE]: ({ commit, state }, payload) => {
      const favouriteChar = [...state.favouriteList, payload];
      localStorage.setItem(
        "favourite_characters",
        JSON.stringify(favouriteChar)
      );
      commit("SET_FAVOURITE", favouriteChar);
      const newCount = state.favouriteCount + 1;
      commit("SET_FAVOURITE_COUNT", newCount);
    },
    [actions.REMOVE_FROM_FAVOURITE]: ({ commit, state }, payload) => {
      const favouriteChar = state.favouriteList.filter(
        ({ id }) => payload !== id
      );
      localStorage.setItem(
        "favourite_characters",
        JSON.stringify(favouriteChar)
      );
      commit("SET_FAVOURITE", favouriteChar);
      const newCount = state.favouriteCount - 1;
      commit("SET_FAVOURITE_COUNT", newCount);
    },
    [actions.GET_FAVOURITE_LIST]: ({ commit }) => {
      const list = JSON.parse(localStorage.getItem("favourite_characters"));
      commit("SET_FAVOURITE", list ? list : []);
      commit("SET_FAVOURITE_COUNT", list ? list.length : 0);
    },
  },
  modules: {},
  getters: {},
});
