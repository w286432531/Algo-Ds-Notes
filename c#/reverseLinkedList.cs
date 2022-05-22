
 * //Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode result = new ListNode();
        while (head != null) {
            ListNode temp = (head.next.val, head);
            result.next = temp;
            
        }
        return null;
    }
}