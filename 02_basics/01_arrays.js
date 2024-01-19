// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Captain Marvel", "Captain America", "Dr Stange", "Iron Man", "Wanda"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);
console.log(myArr2.length)
console.log(myArr2.lastIndexOf(4))

// Array Methods

myArr.push(7)  // The push() method adds new items to the end of an array.
myArr.pop()    // The pop() method removes the last element of an array.

myArr.unshift(9)  // The unshift() method adds new elements to the beginning of an array.
myArr.shift()   // shift() method removes the first item of an array.

myArr.reverse()    // The reverse() method reverses the order of the elements in an array.

console.log(myArr);

console.log(myArr.includes(9));   // includes() method returns true if an array contains a specified value otherwise returns false if the value is not found.

const newArr = myArr.join()  // Adds all the elements of an array into a string.
console.log(myArr);
console.log(newArr);

console.log(typeof newArr);    // string

//slice, splice

const myArr3 = myArr.slice(1, 3)  // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
   // slice() method does not change the original array.

console.log(myArr3);
console.log("A ", myArr);

const myA1 = myArr.splice(1, 3)

// The splice() method adds and/or removes array elements.
  //The splice() method overwrites the original array.

console.log(myA1);
console.log("B ", myArr);

const myA2 = myArr.splice(1, 3, "lemon", "orange")

console.log(myA2);
console.log("C ", myArr);
