//Dates

let myDate = new Date()
// console.log(myDate.toString()); // Tue Aug 27 2024 00:55:59 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()); //2024-08-26T19:25:59.588Z
// console.log(myDate.toDateString()); // Tue Aug 27 2024
// console.log(myDate.toTimeString()); // 00:55:59 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleDateString());  // 27/8/2024
// console.log(myDate.toLocaleTimeString());  // 12:55:59 am
// console.log(myDate.toLocaleString());  //  27/8/2024, 12:55:59 am
// console.log(myDate.toTimeString());  //  00:55:59 GMT+0530 (India Standard Time)
// console.log(typeof myDate);   // object

//let myCreatedDate = new Date(2023, 0, 23)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);  // in javascript date is started by 0 so we add 1

let date1 = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(date1);
