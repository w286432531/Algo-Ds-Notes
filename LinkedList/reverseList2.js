var reverseBetween = function (head, left, right) {
  let dummyHead = new ListNode(0, head);
  let p1 = dummyHead;
  for (let i = 1; i < left; i++) {
    p1 = p1.next;
  }
  //p1 = left.prev
  let range = right - left;
  let prev = p1.next;
  let newHead = prev.next;
  for (let i = 0; i < range; i++) {
    // 1,2,3,4 p1 =1, prev = 2, newHead = 3
    prev.next = newHead.next; // 1,2,4  
    newHead.next = p1.next; // 3,2   
    p1.next = newHead; //1,3,2,4 
    newHead = prev.next; //newHead = 4
  }
  return dummyHead.next;
};
