//brute force faster, more memory for new nodes
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;
  let arr = [];
  for (let list of lists) {
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  }
  arr.sort((a, b) => a - b);
  let dummyHead = new ListNode();
  let current = dummyHead;
  for (let val of arr) {
    current.next = new ListNode(val, null);
    current = current.next;
  }
  return dummyHead.next;
};
//merge one by one 
//slow but less memory
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;
  let arr = [];
  for (let list of lists) {
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  }
  arr.sort((a, b) => a - b);
  let dummyHead = new ListNode();
  let current = dummyHead;
  for (let val of arr) {
    current.next = new ListNode(val, null);
    current = current.next;
  }
  return dummyHead.next;
};
