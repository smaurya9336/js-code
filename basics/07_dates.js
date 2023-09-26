//dates
let myDate=new Date()
// console.log(myDate.toString());//
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);//OBJECT



//let myCreateDate=new Date(2023,1,20,5,6)//2/20/2023, 5:06:00 AM

let myCreateDate=new Date("01-14-2023")
//console.log(myCreateDate.toLocaleString());
let myTimeStamp=Date.now()
//console.log(myTimeStamp);

// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());

console.log(newDate.getDay());
