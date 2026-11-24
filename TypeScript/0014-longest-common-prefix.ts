// Link: https://leetcode.com/problems/longest-common-prefix/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(n * m)
function longestCommonPrefix(strs: string[]): string {
    if(strs.length===1)
        return strs[0];
    let prefix="";
    for(let i=0;true;i++){
        for(let j=0;j<strs.length-1;j++){
            let word1=strs[j],word2=strs[j+1];
            if(i>=word1.length||i>=word2.length||word1[i]!==word2[i])
                return prefix;
        }
        prefix+=strs[0][i];
    }
    return prefix;
};
