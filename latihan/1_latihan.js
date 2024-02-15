let length = 5;
let width = 3;

let areaRect = length * width;
console.log(areaRect);

let perimeter = 2*length + 2*width
console.log(perimeter)

let radius = 5;

let diameter = 2*radius;
console.log(diameter);

let circum = 2 * Math.PI * radius
console.log(circum)

let areaCircle = Math.PI * 5**2
console.log(areaCircle);


let angle1 = 60;
let angle2 = 70;

let angle3 = 180 - angle1 - angle2
console.log(angle3);

const date1 = new Date("2024-01-20");
const date2 = new Date("2024-01-22");

let time1 = date1.getTime()
console.log(time1)

let time2 = date2.getTime()
console.log(time2)

let diver = Math.abs((time1-time2)/1000/86400)

console.log(diver)


///days converter

const days2 = 366;

const getYear = Math.floor(days2/365);
console.log(getYear)

const Month = Math.floor(days2/30);
console.log(Month)

const getMonth = Month%12;
console.log(getMonth)

const getdays = days2%365%30;
console.log(getdays)

console.log(`${getYear} tahun, ${getMonth} bulan, ${getdays} hari`)




