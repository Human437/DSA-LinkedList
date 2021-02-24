const _Node = require('./node')

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item){
    if (this.head === null){
      this.insertFirst(item)
    }else{
      let tempNode = this.head;
      while (tempNode.next !== null) {
          tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item){
    if (!this.head){
      return null
    }
    let previousNode = this.head;
    let currentNode = this.head;
    while((currentNode.value !== item) &&(currentNode !== null)){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next
  }

  find(item){
    if (!this.head){
      return null
    }
    let currentNode = this.head
    while((currentNode.value !== item) &&(currentNode !== null)){
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    return currentNode
  }

  insertBefore(newNode,item){
    if (!this.head){
      return null
    }
    let previousNode = this.head;
    let currentNode = this.head;
    while((currentNode.value !== item) &&(currentNode !== null)){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(newNode,currentNode)
  }

  insertAfter(newNode,item){
    let currentNode = this.find(item)
    currentNode.next = new _Node(newNode,currentNode.next)
  }

  insertAt(newNode,position){
    let counter = 1;
    if (!this.head){
      return null
    }
    let currentNode = this.head;
    while((currentNode !== null) && (counter < position)){
      counter += 1
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    currentNode.next = new _Node(newNode,currentNode.next)
  }
}

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
// console.log(display(SLL))

function size(linkedList){
  let counter = 0;
  if (!linkedList.head){
    return 0
  }
  let currentNode = linkedList.head;
  while((currentNode !== null)){
    currentNode = currentNode.next;
    counter += 1
  }
  return counter
}

// console.log(size(SLL))

function isEmpty(linkedList){
  return !linkedList.head
}
let test = new LinkedList()
// console.log(isEmpty(SLL))
// console.log(isEmpty(test))

function findPrevious(item,linkedList){
  if (!linkedList.head){
    return null
  }
  let previousNode = linkedList.head;
  let currentNode = linkedList.head;
  while((currentNode.value !== item) &&(currentNode !== null)){
    previousNode = currentNode;
    currentNode = currentNode.next;
  }
  if (currentNode === null) {
    console.log('Item not found');
    return;
  }
  return previousNode
}

// console.log(findPrevious('Starbuck',SLL))

function findLast(linkedList){
  if (!linkedList.head){
    return null
  }
  let currentNode = linkedList.head;
  while(currentNode !== null){
    if (currentNode.next === null){
      break;
    }
    currentNode = currentNode.next
  }
  return currentNode
}

// console.log(findLast(SLL))

module.exports = LinkedList