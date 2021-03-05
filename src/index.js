
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix.length == 0 || matrix == null) {
    return []
  }
    let a = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        a.push(...matrix[i])
      } else {
        a.push(...matrix[i].reverse())
      }
    }
    return a;
}
