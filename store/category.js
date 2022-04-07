export const state = () => ({
  categoryList: [],
});

export const mutations = {
  setCategoriesList(state, list) {
    state.categoryList = list;
  },
};
