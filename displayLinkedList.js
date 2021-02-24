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

module.exports = display