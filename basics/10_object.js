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

// const tinderUser={}

// tinderUser.id="123abc"
// tinderUser.name="janny"
// tinderUser.isloggedIn=false
// console.log(tinderUser);

// const target={1:"a",2:"b"}
// const source={3:"c",4:"d"}

// //const obj1=Object.assign({},target,source)
// const obj1={...target, ...source}

// //console.log(obj1);







// const users=[
//     {
//     id:1,
//     email:"sarita@gmail.com"
// },

// {
//     id:1,
//     email:"sarita@gmail.com"
// },
// {
//     id:1,
//     email:"sarita@gmail.com"
// }
// ]

// user[1].email
// // console.log(tinderUser);

// // console.log(Object.keys(tinderUser));
// // console.log(Object.values(tinderUser));
// // console.log(Object.entries(tinderUser));
// // console.log(tinderUser.hasOwnProperty('islogged'));


// const course={
//     coursename:"JS in hindi",
//     price:"999",
//     courseInstructor:"sarita"
// }

// const {courseInstructor:instructor}=course
// console.log(instructor);

// // const navbar=() =>{

// // }


// //json

// // {
// //     "name":"sarita",
// //     "coursename":"Python",
// // }

// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter a username");
//         return

//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserMessage("Sarita maurya"))
// // console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return val1
}

console.log(calculateCartPrice(200,300,400,3000));


const user={
    username:"sarita",
    price:299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)
handleObject({
    username:"sarita",
    price :5666
})

const myNewArray=[200,300,700,800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


























