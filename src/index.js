module.exports = function towelSort (matrix) {
  if (arguments.length == 0) {return  []}
  return matrix.map((el, i) => i % 2? el.sort((a, b) => b - a): el.sort((a, b) => a - b)).flat()
}

