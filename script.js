'use strint';

// To convert string into number
const strNumber1 = '12345';
console.log(parseInt(strNumber1)); // Convert to int 12345

const strNumber2 = '12345abc';
console.log(parseInt(strNumber2)); // Extract only int 12345

const strNumber3 = '12345.5abc';
console.log(parseInt(strNumber3)); // Extract only int 12345

const strNumber4 = '12345.5abc';
console.log(parseFloat(strNumber4)); // Extract only float 12345.5

// Automatic conversion using + operator before string number
const strNumber5 = '12345';
console.log(+ strNumber5); // Convert to int 12345

// Numeric separator using _ operator
// To convert big values into spearate like 1111222233330000 to 1,1112,22233,330000
let bigNumber = 50_30500_100203 // 50,30500,100203
console.log(bigNumber); // 5030500100203

// BigInt primitive data type
// As numbers are 64 bits or 8 bytes so it is limited
// JS cant represent big numbers simply
console.log(111111111111111111111111111111111); // 1.1111111111111112e+32

// To convert into BigInt, put 'n' at end OR using BigInt()
console.log(111111111111111111111111111111111n); // 111111111111111111111111111111111n
console.log(BigInt(111111111111111111111111111111111)); 

// Creating Dates (4 ways)
console.log(new Date()); // Current date and time
console.log(new Date('July 28 2022 12:21:05')); // Thu Jul 28 2022 12:21:05 GMT+0500 (Pakistan Standard Time)
console.log(new Date('July 28, 2022')); // Thu Jul 28 2022 00:00:00 GMT+0500 (Pakistan Standard Time)

// Methdods on Date
const now = new Date(); // Thu Jul 28 2022 12:31:18 GMT+0500 (Pakistan Standard Time)
console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 6 as Month start from 0
console.log(now.getDate()); // 28
console.log(now.getDay()); // 4 (Thursday) Start from (Sunday 0)

// Intl (Internationalizing Dates)
// To format date acc to different countries
const currentDate = new Date(); // Thu Jul 28 2022 12:31:18 GMT+0500 (Pakistan Standard Time)
console.log(Intl.DateTimeFormat('en-US').format(currentDate)); // 7/28/2022 (US standard)
console.log(Intl.DateTimeFormat('en-GB').format(currentDate)); // 28/07/2022 (UK standard)

// Intl (Internationalizing Numbers)
// To format numbers acc to different countries
const num = 123456789.10
console.log(Intl.NumberFormat('en-US').format(num)); // 123,456,789.1 (US standard)
console.log(Intl.NumberFormat('de-DE').format(num)); // 123.456.789,1 (Germany Standard)

// Timers (timeout & intervals)
// To set the time of execution for any function
setTimeout(function(){
    console.log("I am called ...");
}, 3000); // This function will be called after 3000ms OR 3s

// During time waiting, execution not stops, it continues to execute
console.log('waiting ....');

// SetInterval same as SetTimeout but repeat itself again and again
// Counter using timeout
let counter = 0;
setInterval(function(){
    counter++;
    console.log(counter);
}, 1000);
