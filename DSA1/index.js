function twoSum(nums, target) {
  const complementMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    
    if (complementMap.has(complement)) {
      return [complementMap.get(complement), i];
    }
    
    complementMap.set(num, i);
  }
  
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result);
// Output:

// csharp
// Copy code
// [0, 1]
// In the given array [2, 7, 11, 15], the pair [2, 7] adds up to the target 9, so the function returns the indices [0, 1] indicating the positions of 2 and 7 in the array.






