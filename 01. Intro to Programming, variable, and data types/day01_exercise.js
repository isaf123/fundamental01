let width = 3
let length = 5

////////area of rectangle//////////////////
const square = width * length
console.log(square)

////////////perimeter of rectangle//////////////////
const perimeter = 2*width + 2*length
console.log(perimeter)

//////////circle/////////////
let radius = 5;
const diameter = radius*2
console.log(diameter)

//circumference = 2 x phi x r
const circum = 2*Math.PI*radius
console.log(circum)

//circle area 
const area = Math.PI * radius*radius
console.log(area)

//////triangle///////
let angleA = 80
let angleB = 65
const angle3 = 180 - angleA - angleB
console.log(angle3)

////////between date//////////////
const date1 = new Date("2024-01-20");
const date2 = new Date("2024-01-22");

const sec1 = date1.getTime()
const sec2 = date2.getTime()
console.log(Math.abs(sec2-sec1)/1000/86400)

/////////////convert days to year/////////////////////
let days = 400

const year1 = Math.floor(days/365);
console.log(year1)

const Month = Math.floor(days%365/30);
console.log(Month)

const days1 = Math.floor(days%365%30);
console.log(days1)

console.log(`${year1} tahun ${Month} Bulan ${days1} Hari` )


////////////convert days to year//////////////

//problem : write code convert days to year, month, and days
// input : ada 1
//

const daysAmount = 400;

//Proses  1 year = 365 days , 1 month = 30 days
const year = Math.floor(daysAmount/365);
console.log(year);
const dayLeft = daysAmount%365
console.log(dayLeft)
const month2 = Math.floor(dayLeft/30);
console.log(month2)
const days2 = dayLeft%30
console.log(days2)

console.log(`${year} year, ${month2} month, ${days2} days`)





