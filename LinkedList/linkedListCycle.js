var hasCycle = function (head) {
  let slowHead = head;
  let fastHead = head;
  while (fastHead && fastHead.next) {
    slowHead = slowHead.next;
    fastHead = fastHead.next.next;
    if (slowHead == fastHead) {
      return true;
    }
  }
  return false;
};
//linked list cycle 2
var detectCycle = function (head) {
  let slowHead = head;
  let fastHead = head;
  while (fastHead && fastHead.next) {
    slowHead = slowHead.next;
    fastHead = fastHead.next.next;
    if (slowHead == fastHead) break;
  }
  if (!fastHead || !fastHead.next) {
    return null;
  }
  slowHead = head;
  while (slowHead != fastHead) {
    slowHead = slowHead.next;
    fastHead = fastHead.next;
  }
  return slowHead;
};