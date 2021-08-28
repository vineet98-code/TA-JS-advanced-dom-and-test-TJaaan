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

let admission = moment('2014-11-11', '2015-09-11'); 

let discharge = moment('2014-11-27', '2015-09-16'); 

let diffrence = discharge.diff(admission, 'days')

console.log(diffrence);



// date after 

let dateAfter1 = moment('2020-01-01').isAfter('2018-01-01');

let dateAfter2 = moment('2010-01-01').isAfter('2018-01-01');

console.log(dateAfter1);
console.log(dateAfter2);

// leap year

let leapYear1 = moment([2019]).isLeapYear();
let leapYear2 = moment([2020]).isLeapYear();

console.log(leapYear1);
console.log(leapYear2);

// Use five methods form the list of Array methods and five from Collection methods

const lodash = require("lodash");

let characters = ["a", "b", "c", "d"];

// First Method
let chunked = lodash.chunk(characters, 2);

console.log(chunked);
console.log(lodash.difference([2, 1], [2, 3]));

// Second Method
let compacted = lodash.compact([0, 1, false, 2, '', 3]);
console.log(compacted);

// Third Method

var array = [1];
var other = lodash.concat(array, 2, [3], [[4]]);

console.log(other);

// Fourth Metthod

let droped = lodash.drop([1, 2, 3]);

console.log(droped);

// Fifth Method

var array = [1, 2, 3];
 
let filled = lodash.fill(array, 'a');

console.log(filled);

// Collection methods

let counted = lodash.countBy([6.1, 4.2, 6.3], Math.floor);

console.log(counted);


var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
];

let filtered = lodash.filter(users, function(o) { return !o.active; });

console.log(filtered);

let search = lodash.find(users, function(o) { return o.age < 40; });

console.log(search);

let searchLast = lodash.findLast([1, 2, 3, 4], function(n) {
    return n % 2 == 1;
  });
console.log(searchLast);