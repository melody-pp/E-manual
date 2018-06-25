export default {
  currentCat1Index (state) {
    return state.cate1List.indexOf(state.cate1List.find(cat1 => cat1.id === state.currentCat1))
  }
}
