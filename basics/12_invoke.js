// Immediate Invoked function Expresssion (IIFE)

(function login(){
    //names IIFE
    console.log("db connected");
})();


( (name) =>{
    console.log(`DB CONNECTED ${name}`);

} )('sarita');