let age = 5

if(age>=17){
  console.log("you can have ID Card")
} else{
  console.log("you must wait")
}

let grade ="C";

if (grade === "A"){
  console.log("excelence")
} else if(grade === "B"){
  console.log("Great")
}else if (grade ==="C"){
  console.log("Average")
}else{
  console.log("under Grade")
}

const expr = 'Oranges';
switch(expr){
  case'oranges':
  console.log('orange are $0.59');
    break;
  case 'Mangos':
  case'Papayas': 
  console.log('Papayas or Mangos = $6');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}`)

} 


const car = "TOYOTA"
if(car === "BMW"|| car ==="TOYOTA"){
  console.log("this car awesome")
}

for(let i = 0; i<3; i++){
  console.log("Hello")
}

let i =0;
while (i < 5){
  console.log("Hello")
  i++
}

//do..while loop


//brek in loop
let sum = 0;
while(true){
  let value = 1;
  if (sum === 5) break;
  sum+=value;
}

console.log(sum)

//continue loop 
for(let i=0; i<5; i=i+1){
  if(i === 3) continue;
  console.log(i);
}
