//*  npm install prompt-sync
const prompt = require('prompt-sync')({sigint:true})
let x = parseInt (prompt("請輸入x值"))

let subtotal = (13 + 1) *5;
let shipping = 0.5* (13 + +1);

let total = subtotal + shipping
console.log(total)