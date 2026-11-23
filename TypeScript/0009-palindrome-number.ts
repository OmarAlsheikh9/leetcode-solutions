// Link: https://leetcode.com/problems/palindrome-number/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(log x)
function isPalindrome(x: number): boolean {
    const num = x.toString();
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[num.length - 1 - i])
            return false;
    }
    return true;
};
