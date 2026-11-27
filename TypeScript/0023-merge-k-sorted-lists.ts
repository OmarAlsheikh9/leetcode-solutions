// Link: https://leetcode.com/problems/merge-k-sorted-lists/
// Difficulty: Hard

// Solution 1
// Time Complexity: O(N + R) where N is total nodes and R is value range
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let size = Math.pow(10,4)*2+1;
    let freq=new Array<number>(Math.pow(10,4)*2+1).fill(0);
    for(let i=0;i<lists.length;i++){
        let cur=lists[i];
        while(cur){
            freq[cur.val+Math.pow(10,4)]++;
            cur=cur.next;
        }
    }
    let head:ListNode|null=null,tail:ListNode|null=null;
    for(let i=0;i<freq.length;i++){
        let num=i-Math.pow(10,4),count=freq[i];
        while(count--){
            let newItem = new ListNode(num);
            if(!head) head=tail=newItem;
            else tail.next=newItem,tail=newItem;
        }
    }
    return head;
};
