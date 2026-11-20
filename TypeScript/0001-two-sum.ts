// Link: https://leetcode.com/problems/two-sum/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(n)
function twoSum(nums: number[], target: number): number[] {
  let mp = new Map<number,number>();
  for(let i=0;i<nums.length;i++){
    let firstNumber = nums[i]! , secondNumber = target - firstNumber;
    const targetIndex = mp.get(secondNumber);
    if(targetIndex!==undefined)
      return [i,targetIndex];
    mp.set(nums[i]!,i);
  }
  return [-1,-1];
}

// Solution 2
// Time Complexity: O(n^2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let targetIndex = nums.findIndex((el,index) => (el === target- nums[i]! && i!=index));
    if (targetIndex!==-1) 
      return [i,targetIndex];
  }
  return [];
}
