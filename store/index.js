export const state = () => ({
  lastProducts: [],
});

export const mutations = {
  setLastProducts(state, products) {
    state.lastProducts = products;
  },
};

export const actions = {
  async getLastProducts({ commit }) {
    const lastProducts = await this.$axios.$get(`products/`, {
      params: { limit: 4 },
    });
    commit("setLastProducts", lastProducts.results);
  },
};
