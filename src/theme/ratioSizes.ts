const ratio = 1.25;
const sizesFromRatioConstructor = {
  sizeMinus5: function () {
    return this.sizeMinus4() / ratio;
  },
  sizeMinus4: function () {
    return this.sizeMinus3() / ratio;
  },
  sizeMinus3: function () {
    return this.sizeMinus2() / ratio;
  },
  sizeMinus2: function () {
    return this.sizeMinus1() / ratio;
  },
  sizeMinus1: function () {
    return this.size0 / ratio;
  },
  size0: 1,
  size1: function () {
    return this.size0 * ratio;
  },
  size2: function () {
    return this.size1() * ratio;
  },
  size3: function () {
    return this.size2() * ratio;
  },
  size4: function () {
    return this.size3() * ratio;
  },
  size5: function () {
    return this.size4() * ratio;
  }
};

const ratioSizes = {
  1: `${sizesFromRatioConstructor.sizeMinus5()}rem`,
  2: `${sizesFromRatioConstructor.sizeMinus4()}rem`,
  3: `${sizesFromRatioConstructor.sizeMinus3()}rem`,
  4: `${sizesFromRatioConstructor.sizeMinus2()}rem`,
  5: `${sizesFromRatioConstructor.sizeMinus1()}rem`,
  6: `${sizesFromRatioConstructor.size0}rem`,
  7: `${sizesFromRatioConstructor.size1()}rem`,
  8: `${sizesFromRatioConstructor.size2()}rem`,
  9: `${sizesFromRatioConstructor.size3()}rem`,
  10: `${sizesFromRatioConstructor.size4()}rem`,
  11: `${sizesFromRatioConstructor.size5()}rem`
};

export default ratioSizes;
