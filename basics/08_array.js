// array


const myArr=[0,1,2,3,45,true,"sarita"]
// console.log(myArr);
// console.log("sarita");
// myArr.pop()
// myArr.push(7)
// console.log(myArr);
// myArr.unshift(9)
// myArr.shift()

const newArr=myArr.join()
console.log(newArr);
console.log(typeof newArr);


// slice,splice
const myn1=myArr.slice(1,3)
console.log("A",myArr);
console.log(myn1);

const myn2=myArr.splice(1,3)
console.log("B",myArr)
console.log(myn2);