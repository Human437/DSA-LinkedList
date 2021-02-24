const LinkedList = require('./linked-list')
const display = require('./displayLinkedList')

let SLL;

function main(){
  SLL = new LinkedList();
  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')
  SLL.insertLast('Tauhida')
  SLL.remove('Husker')
  SLL.insertBefore('Athena','Boomer')
  SLL.insertAfter('Hotdog','Helo')
  SLL.insertAt('Kat',3)
  SLL.remove('Tauhida')
}
main()

console.log(display(SLL))

function thirdFromTheEnd(linkedList){
  let counter = 1;
  if (!linkedList.head){
    return null
  }
  let currentNode = linkedList.head
  while (currentNode !== null){
    counter += 1
    currentNode = currentNode.next
  }
  let length = counter
  counter = 1
  currentNode = linkedList.head
  while (counter < length-3){
    currentNode = currentNode.next
    counter +=1
  }
  return currentNode
} 
console.log(thirdFromTheEnd(SLL))