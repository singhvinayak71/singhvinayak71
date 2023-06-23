


function containsDuplicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}
let nums = [1, 2, 3, 2];
console.log(containsDuplicate(nums));