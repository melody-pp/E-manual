export default {
  cat2List (state) {
    return state.catList.find(cat1 => cat1.name === state.currentCat1).children
  },
  cat3List (state, getters) {
    return getters.cat2List.find(cat2 => cat2.name === state.currentCat2).children
  }
}
