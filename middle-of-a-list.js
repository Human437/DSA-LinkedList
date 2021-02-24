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

function middleOfAList(linkedList){
  if (!linkedList.head){
    return null
  }
  let a = linkedList.head
  let b = linkedList.head
  while ((b !== null) && (b.next !== null)){
    a = a.next
    b = b.next.next
  }
  return a
}
console.log(middleOfAList(SLL))