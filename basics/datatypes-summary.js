// Primitive data type
 //  String, Number, Boolean , null , undefined , Symbol , BigInt

 const score=100
 const scoreValue= 100.2
  
 const isLoggedIn=false
 const outsideTemp=null
 let useEmail

 const id=Symbol('123')
 const anotherId=Symbol('123')
 console.log(id===anotherId);

 // Non Primitive data type

// Array, Object , Function

const heros=["Sarita" , "Akash", "shambhu"];
let myObj={
    name:"Sarita",
    age:22,
}


const myFunction = function(){
    console.log("hello world");
}


// ********************************************

//stack(primitive) , heap(non-primitive)

let myEmail="sarita@google.com"
let anotherEmail= myEmail
anotherEmail="sm253256@google.com"
console.log(myEmail);
console.log(anotherEmail);


// heap
 let user1={
    email:"user1@gmail.com",
    upi:"user@ybl"
 }
 let user2=user1

 user2.email="sarita122@google.com"

 console.log(user1.email);
 console.log(user2.email);


