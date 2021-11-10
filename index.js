function myEach(collection,fn){
  let array = makeArray(collection)
  for (let item of array){
    fn(item)
  }
  return collection
}

function myMap(collection,fn){
  let array = makeArray(collection)
  let returnArray = []
  for (let item of array){
    returnArray.push(fn(item))
  }
  return returnArray
}

function myReduce(collection,fn,acc){
  let array = makeArray(collection)
  let sum
  if (!acc) {
    sum = array[0]
    array = array.slice(1)
  } else {
    sum = acc
  }
  for (let item of array){
    sum = fn(sum,item,array)
  }
  return sum
}

function myFind(collection,fn){
  let array = makeArray(collection)
  for (let item of array) {
    if (fn(item)) {
      return item
    }
  }
}

function myFilter(collection,fn) {
  let array = makeArray(collection)
  let returnArray = []
  for (let item of array) {
    if (fn(item)) {returnArray.push(item)}
  }
  return returnArray
}

function mySize(collection) {
  return makeArray(collection).length
}

function myFirst(array,n=0){
  if (n === 0) {return array[0]}
  return array.slice(0,n)
}

function myLast(array,n=0){
  if (n === 0) {return array[array.length-1]}
  return array.slice(n*-1)
}

function myKeys(object){
  return Object.keys(object)
}

function myValues(object){
  return Object.values(object)
}

let makeArray = (collection) => {
  if (typeof collection === 'object') {
    return Object.values(collection)
  } 
  return collection
}