export const state = () => ({
  productsList: [],
  product: {
    id: 0,
    name: "",
    image: "",
    small_description: "",
    price: 0,
    category: {
      id: 0,
      name: "",
      slug: "",
    },
  },
  productLoading: true,
});

export const mutations = {
  setProductsList(state, list) {
    state.productsList = list;
  },
  setProduct(state, product) {
    state.product = product;
  },
  setProductLoading(state, loading) {
    state.productLoading = loading;
  },
};

export const actions = {
  async getProductsList({ commit }) {
    const productsList = await this.$axios.$get(`products/`);

    commit("setProductsList", productsList.results);
  },

  async getProductById({ commit }, productId) {
    const product = await this.$axios
      .$get(`products/${productId}`)
      .then((response) => {
        commit("setProduct", response);
        commit("setProductLoading", false);
      });
  },
};
