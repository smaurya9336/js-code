//singleton


//object literals
// const jsUser={
//     name:"sarita",
//     age:22,
//     email:"sm21751@gmail.com",
//     loginid:false,
//     branch:"Computer SCience",
//     year:3,
//     collegeNmae:"GITM LUCKNOW"

// }

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser);

//singleton

//const tinderUser=new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="janny"
tinderUser.isloggedIn=false
console.log(tinderUser);

const target={1:"a",2:"b"}
const source={3:"c",4:"d"}

//const obj1=Object.assign({},target,source)
const obj1={...target, ...source}

console.log(obj1);




