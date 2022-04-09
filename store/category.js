export const state = () => ({
  categoriesList: [],
});

export const mutations = {
  setCategoriesList(state, categories) {
    state.categoriesList = categories;
  },
};

export const actions = {
  async getCategoriesList({ commit }) {
    const categoriesList = await this.$axios.$get(`categories/`);

    commit("setCategoriesList", categoriesList);
  },
};
