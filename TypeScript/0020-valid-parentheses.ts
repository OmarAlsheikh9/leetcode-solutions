// Link: https://leetcode.com/problems/valid-parentheses/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(n)
function isValid(s: string): boolean {
    let mp=new Map<string,string>();
    mp.set("{","}");mp.set("[","]");mp.set("(",")");
    let stk = new Array<string>();
    for(let i=0;i<s.length;i++){
        if(s[i]==="}"||s[i]===")"||s[i]==="]"){
            if(stk.length===0||s[i]!==mp.get(stk[stk.length-1])) return false;
            stk.pop();
        }
        else
            stk.push(s[i]);
    }
    return stk.length===0;
};
