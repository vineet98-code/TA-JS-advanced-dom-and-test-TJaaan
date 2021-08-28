let moment = require("moment");


// Print Date or Time in the following format:

let date1 = moment().format('MMMM Do YYYY, h:mm:ss a');
let date2 = moment().format('dddd');   
let date3 = moment().format("MMM Do YY");

console.log(date1);
console.log(date2);
console.log(date3);

// Check if the following date is valid or not:

let validDate1 = moment('It is 2020-01-01', 'YYYY-MM-DD').isValid();  
let validDate2 = moment('It is 2020-14-01', 'YYYY-MM-DD').isValid();  

console.log(validDate1);
console.log(validDate2);



// Manipulating Date

let changeDaysAdd = moment().add(7, 'days').calendar();       
let changeMonthsAdd = moment().add(7, 'months').calendar();       
let changeYearsAdd = moment().add(7, 'years').calendar(); 

let changeDaysSubtarct = moment().subtract(7, 'days').calendar();       
let changeMonthsSubtarct = moment().subtract(7, 'months').calendar();       
let changeYearsSubtarct = moment().subtract(7, 'years').calendar(); 

console.log(changeDaysAdd);
console.log(changeMonthsAdd);
console.log(changeYearsAdd);

console.log(changeDaysSubtarct);
console.log(changeMonthsSubtarct);
console.log(changeYearsSubtarct);


// Find the difference between the following 2 dates:

let difference1 = moment().difference('2014-11-11', '2015-09-11'); 

let difference2 = moment().difference('2014-11-27', '2015-09-16'); 

console.log(difference1);
console.log(difference2);






