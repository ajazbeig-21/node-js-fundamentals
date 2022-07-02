// this is synchronous
console.log("first");

//setTimeout is asynchronous, if callback is detected task is off=loaded and other synchronous task runed

setTimeout(()=>{
console.log("second");
},10000);


//this is synchronous
console.log("third");