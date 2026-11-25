// Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Difficulty: Medium

// Solution 1
// Time Complexity: O(L)
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // optimal solution
    // tail is 1st because tail.next=null . node previous tail is 2st because .next.next=null
    let left=head,right=head,prevLeft:ListNode|null=null;
    while(n--) right=right.next;
    while(right){
        prevLeft=left;
        left=left.next;
        right=right.next;
    }
    // left is DeletedNode so delete it
    if(!prevLeft) return head.next;
    prevLeft.next=left.next;
    return head;
};

// Solution 2
// Time Complexity: O(L * n)
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
    // optimal solution
    // tail is 1st because tail.next=null . node previous tail is 2st because .next.next=null
    let cur=head,prev:ListNode|null;
    while(cur){
        let size=n,temp=cur;
        while(size--) temp=temp.next;
        if(!temp){
            if(!prev) return head.next;
            prev.next=cur.next;
            break;
        } 
        prev=cur;
        cur=cur.next;
    }
    return head;
};

// Solution 3
// Time Complexity: O(L)
function removeNthFromEnd3(head: ListNode | null, n: number): ListNode | null {
    // brute force
    let length=0,temp=head;
    while(temp) length++,temp=temp.next;
    let target=length-n+1,prev:ListNode|null=null,cur=head;
    for(let i=1;i<=target;i++){
        if(i===target){
            if(!prev) return head.next;
            prev.next=cur.next;
            break;
        } 
        prev=cur;
        cur=cur.next;
    }
    return head;
};
