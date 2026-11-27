// Link: https://leetcode.com/problems/reverse-nodes-in-k-group/
// Difficulty: Hard

// Solution 1
// Time Complexity: O(n)
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let dummy=new ListNode(-1);
    dummy.next=head;
    let endPivousList=dummy,cur=head,nextList:ListNode|null=null;
    while(cur){
        let tempK=k-1,tempCur=cur;
        while(tempK&&tempCur)
            tempCur=tempCur.next,tempK--;
        if(!tempCur) break;
        let nextList=tempCur.next;
        let [newHead,newTail]=reverse(cur,tempCur);
        endPivousList.next=newHead;
        newTail.next=nextList;
        endPivousList=newTail;
        cur=nextList;
    }
    return dummy.next;
};

function reverse(head: ListNode, tail: ListNode): [ListNode, ListNode] {
    let prev: ListNode | null = null;
    let cur: ListNode | null = head;
    let stopNode = tail.next;

    while (cur !== stopNode) {
        let next = cur!.next;
        cur!.next = prev;
        prev = cur;
        cur = next;
    }

    return [tail, head];
}
