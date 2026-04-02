function Factorial(n) {
    if (n <= 1) return 1;
    return n * Factorial(n-1);
}

function Combination(n , k) {
    if (k < 0 || k > n) return 0;
    return Factorial(n) / (Factorial(k) * Factorial(n - k));
}

console.log(Combination(3, 2));