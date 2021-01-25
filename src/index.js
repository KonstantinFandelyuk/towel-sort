// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === null || matrix === undefined || matrix.length <= 0)
        return [];
    let a = matrix.length;
    let res = [];
    for (let i = 0; i < a; i++) {
        res = res.concat(i % 2 == 0 ? matrix[i] : matrix[i].reverse());
    }
    return res;
};
