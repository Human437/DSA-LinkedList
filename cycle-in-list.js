const LinkedList = require('./linked-list')
const _Node =require('./node')
const display = require('./displayLinkedList')

let CycleList;

function main(){
  CycleList = new LinkedList();
  CycleList.insertFirst('Apollo')
  CycleList.insertLast('Boomer')
  CycleList.insertLast('Helo')
  CycleList.insertLast('Husker')
  CycleList.insertLast('Starbuck')
  CycleList.insertLast('Tauhida')
  CycleList.remove('Husker')
  CycleList.insertBefore('Athena','Boomer')
  CycleList.insertAfter('Hotdog','Helo')
  CycleList.insertAt('Kat',3)
  CycleList.remove('Tauhida')
}
main()

console.log(display(CycleList))

function cycleList(linkedList){
  if(!linkedList.head){
    return null
  }
  let a = linkedList.head
  let b = linkedList.head.next
  while ((b !== null) && (b.next !== null)){
    if(a===b){
      return true
    }
    a = a.next
    b = b.next.next
  }
  return false
}

console.log(cycleList(CycleList))