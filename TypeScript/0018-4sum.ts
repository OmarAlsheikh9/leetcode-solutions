// Link: https://leetcode.com/problems/4sum/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(n^3)
function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    let result: number[][] = new Array<Array<number>>();
    for (let a = 0; a < nums.length - 3; a++) {
        if (a > 0 && nums[a] === nums[a - 1]) continue;
        for (let b = a + 1; b < nums.length - 2; b++) {
            if (b > a + 1 && nums[b] === nums[b - 1]) continue;
            let c = b + 1, d = nums.length - 1;
            while (c < d) {
                let curSum = nums[a] + nums[b] + nums[c] + nums[d];
                if (curSum === target) {
                    result.push([nums[a], nums[b], nums[c], nums[d]]);
                    c++;
                    while (c < d && nums[c] === nums[c - 1]) c++;
                    d--;
                    while (c < d && nums[d] === nums[d + 1]) d--;
                }
                else if (curSum < target) c++;
                else d--;
            }
        }
    }
    return result;
};
