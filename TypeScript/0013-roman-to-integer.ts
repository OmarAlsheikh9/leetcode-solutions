// Link: https://leetcode.com/problems/roman-to-integer/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(n)
function romanToInt(s: string): number {
    let mp=new Map<string,number>([
        ["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000],
        ["IV",4],["IX",9],["XL",40],["XC",90],["CD",400],["CM",900]
    ]);
    let result=0;
    for(let i=0;i<s.length;i++){
        let firstChar=s[i], secondChar = '';
        if(i+1<s.length&&mp.has(s[i]+s[i+1])){
            secondChar=s[i+1];
            i++;
        }
        result+=mp.get(firstChar+secondChar);
    }
    return result;
};
