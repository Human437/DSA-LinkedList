const LinkedList = require('./linked-list')
const display = require('./displayLinkedList')

let SLL;

function main(){
  SLL = new LinkedList();
  SLL.insertFirst(3)
  SLL.insertLast(2)
  SLL.insertLast(5)
  SLL.insertLast(7)
  SLL.insertLast(1)
}
main()

console.log(display(SLL))

function sortList(linkedList){
  if(!linkedList){
    return null
  }
 
  let currentNode = linkedList.head;
  
  while(currentNode !== null){
    let iteratorNode = currentNode.next;
    while(iteratorNode !== null){
      if(currentNode.value > iteratorNode.value){
        let tempNodeValue = currentNode.value;
        currentNode.value = iteratorNode.value
        iteratorNode.value = tempNodeValue
      }
      iteratorNode = iteratorNode.next
    }
    currentNode = currentNode.next
  }
}
sortList(SLL)
console.log(display(SLL))