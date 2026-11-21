// Link: https://leetcode.com/problems/add-two-numbers/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(max(m, n))
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let temp1=l1,temp2=l2,rest=0,dummy=new ListNode(-1),tail=dummy;
    while(temp1||temp2){
        let first=0;
        if(temp1) first=temp1.val,temp1=temp1.next;
        let second=0;
        if(temp2) second=temp2.val,temp2=temp2.next;
        let num=first+second+rest;
        tail.next=new ListNode(num%10);
        tail=tail.next;
        num=Math.trunc(num/10);
        rest=num;
    }
    if(rest) tail.next=new ListNode(rest);
    return dummy.next;
};

// Solution 2
// Time Complexity: O(max(m, n))
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function(l1, l2) {
    let dummy = new ListNode(-1);
    let tail=dummy,rest=0;
    for(let temp1=l1,temp2=l2;temp1||temp2;){
        let item = new ListNode(),sum=0;
        if(temp1){
            sum = temp1.val;
            temp1=temp1.next;
        }
        if(temp2){
            sum += temp2.val;
            temp2=temp2.next;
        }
        sum+=rest;
        item.val=sum%10;
        rest=Math.trunc(sum/10);
        tail.next=item;
        tail=item;
    }
    if(rest)
        tail.next=new ListNode(rest);
    return dummy.next;
};
