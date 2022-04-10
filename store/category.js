export const state = () => ({
  categoriesList: [],
  currentCategory: {},
});

export const mutations = {
  setCategoriesList(state, categories) {
    state.categoriesList = categories;
  },
  setCurrentCategory(state, category) {
    state.currentCategory = category;
  },
};

export const actions = {
  async getCategoriesList({ commit }) {
    const categoriesList = await this.$axios.$get(`categories/`);

    commit("setCategoriesList", categoriesList);
  },
  async getCurrentCategoryBySlug({ commit }, slug) {
    await this.$axios.$get(`categories/${slug}`).then((response) => {
      commit("setCurrentCategory", response);
    });
  },
};
