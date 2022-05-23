var rotateRight = function (head, k) {
  if (head == null || head.next == null) return head;
  let slowHead = head;
  let fastHead = head;
  let endPoint = null;
  for (let i = 0; i < k; i++) {
    fastHead = fastHead.next;
    if (fastHead.next == null) {
      endPoint = fastHead;
      fastHead.next = head;
    }
  }
  if (endPoint) {
    endPoint.next = null;
  }
  while (fastHead.next != null) {
    slowHead = slowHead.next;
    fastHead = fastHead.next;
  }
  fastHead.next = head;
  head = slowHead.next;
  slowHead.next = null;
  return head;
};
