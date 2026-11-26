// Link: https://leetcode.com/problems/generate-parentheses/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(4^n / sqrt(n))
function generateParenthesis(n: number): string[] {
    let result=new Array<string>();
    function backtrack(curString:string,openCount:number,closeCount:number):void{
        if(openCount===n&&closeCount===n){
            result.push(curString);
            return;
        }
        if(openCount<n) backtrack(curString+"(",openCount+1,closeCount);
        if(closeCount<openCount) backtrack(curString+")",openCount,closeCount+1);
    }
    backtrack("",0,0);
    return result;
};
