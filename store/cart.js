export const state = () => ({
  items: [],
});

export const mutations = {
  initializeCart(state) {
    if (localStorage.getItem("cart")) {
      state.items = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  },
  addToCart(state, product) {
    const exists = state.items.filter((item) => item.id === product.id);

    if (exists.length) {
      exists[0].quantity =
        parseInt(exists[0].quantity) + parseInt(product.quantity);
    } else {
      state.items.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(state.items));
  },
  removeFromCart(state, product) {},
};

export const actions = {
  async removeCartItem({ commit }, product) {},
};

export const getters = {
  cartLength(state) {
    let totalLength = 0;

    for (let i = 0; i < state.items.length; i++) {
      totalLength += state.items[i].quantity;
    }

    if (totalLength === 0) {
      return 0;
    } else if (totalLength >= 10) {
      return "9+";
    } else {
      return totalLength;
    }
  },
};
