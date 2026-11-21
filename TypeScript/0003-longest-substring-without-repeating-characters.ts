// Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(n)
function lengthOfLongestSubstring(s: string): number {
    let longest=0,left=0,letters = new Set<string>();
    for(let right=0;right<s.length;right++){
        let cur = s[right];
        while(letters.has(cur))
            letters.delete(s[left++])
        letters.add(cur);
        longest=Math.max(longest,right-left+1);
    }
    return longest;
};

// Solution 2
// Time Complexity: O(n)
function lengthOfLongestSubstring2(s: string): number {
    let longest=0,left=0,lastSeen = new Map<string,number>();
    for(let right=0;right<s.length;right++){
        let cur = s[right];
        if(lastSeen.has(cur) && lastSeen.get(cur)>=left){
            left=lastSeen.get(cur)+1;
        }
        lastSeen.set(cur,right);
        longest=Math.max(longest,right-left+1);
    }
    return longest;
};

// Solution 3
// Time Complexity: O(n^2)
function lengthOfLongestSubstring3(s: string): number {
    let longest=0,left=0,right=0,freqLetter = new Map<string,number>();
    for(;right<s.length;right++){
        let cur = s[right];
        if(freqLetter.has(cur)){
            left=right=freqLetter.get(cur)+1;
            cur=s[right];
            freqLetter.clear();
        }
        freqLetter.set(cur,right);
        longest=Math.max(longest,freqLetter.size);
    }
    return longest;
};
