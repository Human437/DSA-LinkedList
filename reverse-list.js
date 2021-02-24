const LinkedList = require('./linked-list')

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

function display(linkedList){
  let values = []
  if (!linkedList.head){
    return null
  }
  let currentNode = linkedList.head;
  while((currentNode !== null)){
    values.push(currentNode.value)
    currentNode = currentNode.next;
  }
  return values
}
console.log(display(SLL))

function iterativeReverseList(linkedList){
  if (!linkedList.head){
    return null
  }
  
  let currentNode = linkedList.head
  let previousNode = null
  let nextNode;
  while(currentNode !== null){
    nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  linkedList.head = previousNode
}
iterativeReverseList(SLL)
console.log(display(SLL))