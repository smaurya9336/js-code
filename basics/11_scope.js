let a=50
//var c=80
//const b=60
if(true){
    let a=10
    const b=29
    var c=100
    //console.log("inner:",a);

}
//console.log(a);
// console.log(b);
// console.log(c);




function one(){
     const username="sarita"
     
    function two(){
        const website="github.com"
        console.log(username);

    }
    //console.log(website);
    two()
}
//one()





if(true){
    const username="sarita"
    if(username==="sarita"){
        const website=" google.com"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//**************  function hoisting  ***************
//console.log(addone(5))
function addone(num){
    num=num+1
    return num
}

// function tea(){
//     let username="Sarita Maurya"
//     console.log(this);
// }
// tea()


// const tea=function(){
//     let username="sarita"
//     console.log(this.username);
// }
// tea()


// const tea=()=>{
//     let username="sarita"
//     console.log(this);
// }
// tea()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addoTwo(3,7));


//const addTwo=(num1,num2)=> num1+num2
//const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=>({username:"sarita"})
console.log(addTwo(3,8));


































