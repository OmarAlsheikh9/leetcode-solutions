// Link: https://leetcode.com/problems/longest-palindromic-substring/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(n^2)
function longestPalindrome(s: string): string {
    let longest="";
    for(let i=0;i<s.length;i++){
        longest=expandPalindrome(s,i,i,longest);
        longest=expandPalindrome(s,i,i+1,longest);
    }
    return longest;
};
function expandPalindrome(s,left,right,longest):string{
    let cur="";
    while(left>=0&&right<s.length&&s[left]===s[right]){
        cur=left===right?s[left]:s[left]+cur+s[right];
        right++;
        left--;
    }
    if(cur.length>longest.length)
        longest=cur;
    return longest;
}

// Solution 2
// Time Complexity: O(n^3)
function longestPalindrome2(s: string): string {
    let longest:number=0,startLongest:number=0,endLongest:number=0;
    for(let start=0;start<s.length;start++){
        for(let end=s.length-1;start<=end;end--){
            let distance=end-start+1;
            let isVaild=false;
            if(distance>longest)
                isVaild=isPalindrome(s.slice(start,end+1));
            if(isVaild){
                longest=distance;
                startLongest=start;
                endLongest=end;
            }
        }
    }
    return s.length>0?s.slice(startLongest,endLongest+1):'';
};
function isPalindrome(str){
    for(let start=0,end=str.length-1;start<=end;start++,end--)
        if(str[start]!==str[end])
            return false;
    return true;  
}
