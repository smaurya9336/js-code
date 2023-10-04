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
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


//**************  function hoisting  ***************
console.log(addone(5))
function addone(num){
    num=num+1
    return num
}



















