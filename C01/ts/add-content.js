"use strict";
let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 18) {
    greeting = "good morning!";
}
else if (hourNow > 12) {
    greeting = "good afrernoon";
}
else if (hourNow > 0) {
    greeting = "good morning";
}
else {
    greeting = "Welcome!";
}
document.write('<h3>' + greeting + '</h3>');
