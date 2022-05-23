var copyRandomList = function (head) {
  let hashMap = new Map();
  let dummyHead = new Node();
  let current = dummyHead;
  while (head != null) {
    let currentNode = new Node(head.val);
    hashMap.set(head, currentNode);
    head = head.next;
  }
  for (let [key, value] of hashMap) {
    value.random = hashMap.get(key.random);
    current.next = value;
    current = current.next;
  }

  return dummyHead.next;
};
