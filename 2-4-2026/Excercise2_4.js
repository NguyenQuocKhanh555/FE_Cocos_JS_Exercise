function FindMissing(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(x => !set1.has(x));
}

console.log(FindMissing([1, 2, 3], [2, 3, 4, 5]));