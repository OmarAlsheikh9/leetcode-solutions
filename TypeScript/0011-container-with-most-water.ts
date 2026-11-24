// Link: https://leetcode.com/problems/container-with-most-water/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(n)
function maxArea(height: number[]): number {
    let left=0,right=height.length-1,maxAmount=0;
    while(left<right){
        let amount = Math.min(height[left],height[right]) * (right-left);
        maxAmount = Math.max(amount,maxAmount);
        if(height[left]<height[right])
            left++;
        else
            right--;
    }
    return maxAmount;
};
