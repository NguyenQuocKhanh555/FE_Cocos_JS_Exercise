function CountWords(string) {
    if (!string) return 0;

    let count = 1;

    for (let char of string) {
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }

    return count;
}

console.log(CountWords("oneTwoThree"));