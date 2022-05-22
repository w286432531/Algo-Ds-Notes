var reverseKGroup = function (head, k) {
  if (k < 2) return head;
  let dummyHead = new ListNode();
  let current = dummyHead;
  let count = 0;
  let stack = [];
  //loop through list then insert whenever stack length = k;
  while (head) {
    stack.push(head.val);
    count++;
    if (count == k) {
      while (stack.length != 0) {
        let newNode = new ListNode(stack.pop());
        current.next = newNode;
        current = current.next;
      }
      count = 0;
    }
    head = head.next;
  }
  //if there is leftover in the stack
    while (stack.length != 0) {
      let prev = current.next;
      let newNode = new ListNode(stack.pop());
      newNode.next = prev;
      current.next = newNode;
    }
    return dummyHead.next;
};
