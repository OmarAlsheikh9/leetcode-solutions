// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(n)
function removeDuplicates(nums: number[]): number {
    let left=0,right=1;
    while(right<nums.length){
        if(nums[left]!==nums[right])
            nums[++left]=nums[right];
        right++;
    }
    return left+1;
};

// Solution 2
// Time Complexity: O(n)
function removeDuplicates2(nums: number[]): number {
    let uniqueNums=new Set(nums),k=uniqueNums.size,i=0;
    for(const value of uniqueNums){
        nums[i++]=value;
    }
    return k;
};
