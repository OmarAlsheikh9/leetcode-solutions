// Link: https://leetcode.com/problems/merge-two-sorted-lists/
// Difficulty: Easy

// Solution 1
// Time Complexity: O(n + m)
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head: ListNode | null = null,
    tail: ListNode | null = null;
  for (let temp1 = list1, temp2 = list2; temp1 || temp2; ) {
    if (temp1 && temp2 && temp1.val <= temp2.val) {
      [head, tail] = addNode(head, tail, temp1);
      temp1 = temp1.next;
    } else if (temp1 && temp2 && temp2.val <= temp1.val) {
      [head, tail] = addNode(head, tail, temp2);
      temp2 = temp2.next;
    } else if (temp1) {
      [head, tail] = addNode(head, tail, temp1);
      break;
    } else if (temp2) {
      [head, tail] = addNode(head, tail, temp2);
      break;
    }
  }
  return head;
}

function addNode(head: ListNode | null, tail: ListNode | null, item: ListNode): [ListNode, ListNode] {
  if (!head) head = tail = item;
  else {
    tail!.next = item;
    tail = item;
  }
  return [head, tail];
}

// Solution 2
// Time Complexity: O(n + m)
function mergeTwoLists2(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head: ListNode | null = null,
    tail: ListNode | null = null;
  while (list1 && list2) {
    let item = new ListNode();
    if (list1.val <= list2.val) {
      item.val = list1.val;
      list1 = list1.next;
    } else {
      item.val = list2.val;
      list2 = list2.next;
    }
    if (!head)
      head = tail = item;
    else {
      tail!.next = item;
      tail = item;
    }
  }
  if (list1) {
    if (head)
      tail!.next = list1;
    else
      head = list1;
  } else if (list2) {
    if (head)
      tail!.next = list2;
    else
      head = list2;
  }
  return head;
}
