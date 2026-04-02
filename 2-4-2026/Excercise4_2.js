const digits = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

function Read3Digits(number) {
    let hundred = Math.floor(number / 100);
    let ten = Math.floor((number % 100) / 10);
    let unit = number % 10;
    
    let result = "";

    if (hundred > 0) {
        result += digits[hundred] + " trăm";
    }

    if (ten > 0) {
        result += " " + digits[ten] + " mươi";
        if (unit === 1) result += " mốt"
        else if (unit === 5) result += " lăm";
        else if (unit > 0) result += " " + digits[unit];
    }
    else if (ten === 1) {
        result += " mười";
        if (unit === 5) result += " lăm";
        else if (unit > 0) result += " " + digits[unit];
    }
    else if (ten === 0 && unit > 0) {
        if (hundred > 0) result += " linh";
        result += " " + digits[unit];
    }

    return result.trim();
}

function ReadNumber(number) {
    if (number === 0) return "không";

    let van = Math.floor(number / 10000);
    let rest = number % 10000;

    let result = "";

    if (van > 0) {
        result += Read3Digits(van) + " vạn";
    }

    if (rest > 0) {
        let thousand = Math.floor(rest / 1000);
        let last3 = rest % 1000;

        if (thousand > 0) {
            result += " " + digits[thousand] + " ngàn";
        }

        if (last3 > 0) {
            result += " " + Read3Digits(last3);
        }
    }

    return result.trim();
}

console.log(ReadNumber(720583));