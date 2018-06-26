export default {
  currentCat1Index (state) {
    return state.cate1List.indexOf(state.cate1List.find(cat1 => cat1.id === state.currentCat1))
  },
  hotList (state) {
    const cate1 = state.cate1List.find(cate1 => cate1.id === state.currentCat1)
    const res = cate1.img.slice()
    res.scatid = cate1.scatid

    return res
  }
}
