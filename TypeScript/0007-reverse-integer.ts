// Link: https://leetcode.com/problems/reverse-integer/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(log |x|)
function reverse(x: number): number {
  let result:number=0;
  while(x){
    result = (result*10) + x%10;
    x=Math.trunc(x/10);
  }
  if(result<=Math.pow(-2,31) || result>=(Math.pow(2,31)-1))
    return 0;
  return result;
};
