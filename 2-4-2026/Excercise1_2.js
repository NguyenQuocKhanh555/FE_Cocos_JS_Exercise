function FormatShortMoney(value) {
    const abs = Math.abs(value);

    if (abs >= 1000000000) {
        return (value / 1000000000).toFixed(2).replace(/\.00$/, '') + 'B';
    }
    if (abs >= 1000000) {
        return (value / 1000000).toFixed(2).replace(/\.00$/, '') + 'M';
    }
    if (abs >= 1000) {
        return (value / 1000).toFixed(2).replace(/\.00$/, '') + 'K';
    }
}

console.log(FormatShortMoney(1000));
console.log(FormatShortMoney(1123400000));
console.log(FormatShortMoney(1342222));