function plusOne(digits) {
    let carry = 1;

    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        digits[i] = sum % 10;
        carry = Math.floor(sum / 10);
    }

    if (carry === 1) {
        digits.unshift(1);
    }

    return digits;
}
let digits = [1, 2, 3];
console.log(plusOne(digits));