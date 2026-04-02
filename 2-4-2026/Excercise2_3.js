function GetRandomElement(array) {
    if (!array || array.length === 0) return undefined;

    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

const array = [10, 20, 30, 40];
console.log(GetRandomElement(array));