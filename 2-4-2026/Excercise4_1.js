function ToRoman(number) {
    const values = [900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = ["CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let res = "";

    for (let i = 0; i < values.length; i++) {
        while (number >= values[i]) {
            res += symbols[i];
            number -= values[i];
        }
    }

    return res;
}

console.log(ToRoman(987));
