// Link: https://leetcode.com/problems/3sum/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(n^2)
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i]!;
    if (i > 0 && a === nums[i - 1])
      continue;
    let leftPointer = i + 1, rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      let threeSum = a + nums[leftPointer]! + nums[rightPointer]!;
      if (threeSum < 0)
        leftPointer++;
      else if (threeSum > 0)
        rightPointer--;
      else {
        result.push([a, nums[rightPointer]!, nums[leftPointer]!]);
        let oldLeftValue = nums[leftPointer]!;
        while (leftPointer < rightPointer && nums[leftPointer] === oldLeftValue)
          leftPointer++;
      }
    }
  }
  return result;
}
