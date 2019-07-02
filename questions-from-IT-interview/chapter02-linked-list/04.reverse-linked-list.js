/**
 * @desc
 * 分别实现反转单向链表和反转双向链表的函数。
 */

import SinglelyLinkedList from '../../data-structure/singlely-linked-list';
import DoublelyLinkeList from '../../data-structure/doublely-linked-list';
import Stack from '../../data-structure/stack';


function reservseSinglelyLinkedList(linkedList) {
  const reversedLinkedList = new SinglelyLinkedList();
  const stack = new Stack();
  let current = linkedList.head;
  while (current !== null) {
    stack.push(current);
    current = current.next;
  }

  while (!stack.isEmpty()) {
    reversedLinkedList.append(stack.pop().data);
  }
  return reversedLinkedList;
}

function reverseDoublelyLinkedList(linkedList) {
  const reversedLinkedList = new DoublelyLinkeList();
  let current = linkedList.tail;
  while (current !== null) {
    reversedLinkedList.append(current.data);
    current = current.prev;
  }
  return reversedLinkedList;
}


const list1 = new SinglelyLinkedList();
const list2 = new DoublelyLinkeList();
for (let i = 1; i <= 10; i++) {
  list1.append(i);
  list2.append(i);
}
console.log(reservseSinglelyLinkedList(list1));
console.log(reverseDoublelyLinkedList(list2));