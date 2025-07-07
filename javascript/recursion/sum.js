function sumRangeRecursive(n, total = 0) {
    if (n <= 0) {
        return total;
    }
    return sumRangeRecursive(n - 1, total + n);
}

let sum = sumRangeRecursive(3, 0)
console.log(sum)