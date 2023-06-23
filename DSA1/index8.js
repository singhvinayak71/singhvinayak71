function findErrorNums(nums) {
    let xorResult = 0;

    // XOR all the numbers in nums and from 1 to n
    for (let num of nums) {
        xorResult ^= num;
    }
    for (let i = 1; i <= nums.length; i++) {
        xorResult ^= i;
    }

    // Find the rightmost set bit (bitMask)
    let bitMask = xorResult & (-xorResult);

    let num1 = 0;
    let num2 = 0;

    // Separate the numbers based on the rightmost set bit
    for (let num of nums) {
        if ((num & bitMask) !== 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if ((i & bitMask) !== 0) {
            num1 ^= i;
        } else {
            num2 ^= i;
        }
    }

    return [num1, num2];
}

let nums = [1, 2, 2, 4];
console.log(findErrorNums(nums)); 