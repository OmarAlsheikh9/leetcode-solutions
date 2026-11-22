// Link: https://leetcode.com/problems/zigzag-conversion/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(numRows * n)
function convert(s: string, numRows: number): string {
  let array: string[][] = new Array(),
    curRowIndex = 0,
    curColIndex = 0,
    rows = numRows - 1,
    curDir = "down";
  for (let i = 0; i < s.length; i++) {
    if (!array[curRowIndex]) array[curRowIndex] = [];
    array[curRowIndex]![curColIndex] = s[i]!;
    if (curDir === "down") curRowIndex++;
    else if (curDir === "rightDiagonal") (curRowIndex--, curColIndex++);
    if (curRowIndex === rows) curDir = "rightDiagonal";
    else if (curRowIndex === 0) curDir = "down";
  }
  let result = "";
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i]!.length; j++) {
      if (array[i]![j] !== undefined) result += array[i]![j];
    }
  return result;
}
