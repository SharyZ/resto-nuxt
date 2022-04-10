export const state = () => ({
  productsList: [],
  product: {},
});

export const mutations = {
  setProductsList(state, list) {
    state.productsList = list;
  },
  setProduct(state, product) {
    state.product = product;
  },
};

export const actions = {
  async getProductsList({ commit }) {
    const productsList = await this.$axios.$get(`products/`);

    commit("setProductsList", productsList.results);
  },

  async getProductById({ commit }, productId) {
    const product = await this.$axios.$get(`products/${productId}`);

    commit("setProduct", product);
  },
};
