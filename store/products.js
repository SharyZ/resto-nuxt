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

export const getters = {
  lastFourProducts(state) {
    return state.productsList.slice(0, 4);
  },
};
