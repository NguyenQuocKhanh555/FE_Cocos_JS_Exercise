function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(RandomInt(1, 10));