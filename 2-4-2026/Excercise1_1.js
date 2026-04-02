function FormatMoneyString(value) {
    return Number(value).toLocaleString('en-US');
}

console.log(FormatMoneyString(10000000));
console.log(FormatMoneyString(123456));
console.log(FormatMoneyString(12000.02));