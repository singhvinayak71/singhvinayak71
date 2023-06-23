
function removeElement(nums, val) {
    let j = 0;
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[j] = nums[i];
        j++;
      }
    }
    
    return j;
  }
  
  // Example usage:
  const nums = [3, 2, 2, 3];
  const val = 3;
  
  const k = removeElement(nums, val);
  console.log("k:", k);
  console.log("nums:", nums.slice(0, k));