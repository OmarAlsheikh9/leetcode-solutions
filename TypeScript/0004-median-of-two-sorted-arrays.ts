// Link: https://leetcode.com/problems/median-of-two-sorted-arrays/
// Difficulty: Hard

// Solution 1
// Time Complexity: O(m + n)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if(nums1.length===0&&nums2.length==0)
        return 0;
    if(nums1.length===0&&nums2.length!==0)
        return calculateMedian(nums2);
    if(nums2.length===0&&nums1.length!==0)
        return calculateMedian(nums1);
    let array:number[]=[];
    for(let i=0,j=0;i<nums1.length||j<nums2.length;){
        if(i<nums1.length&&j<nums2.length){
            if(nums1[i]!<=nums2[j]!)
                array.push(nums1[i]!),i++;
            else if(nums1[i]!>nums2[j]!)
                array.push(nums2[j]!),j++;
        }
        else if(i<nums1.length)
            array.push(nums1[i]!),i++;
        else if(j<nums2.length)
            array.push(nums2[j]!),j++;
    }
    return calculateMedian(array);
};

function calculateMedian(array:number[]):number{
      if(array.length%2==0)
        return (array[Math.trunc(array.length/2)]! + array[(Math.trunc(array.length/2))-1]!)/2;
    else 
        return array[Math.trunc(array.length/2)]!;
}
