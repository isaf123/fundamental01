
////////convert celcius to fahrenheit
let celci = 60;
let fahr = (9/5)*celci+32;
console.log(fahr)

///////ODD and EVEN

let angka = 24
let oddEven = ""

if(angka%2 == 0){
  oddEven = "Genap"
}else{
  oddEven ="Ganjil"
}
console.log(oddEven);

/////PRIME NUMBER

//bilangan tifak bsia bilangan apapun kecuali 1 dan bialangan itu sendiri
 
let num = 1;
let isPrime = true;

for(let i = 2; i < num; i++){
  if(num%i != 0){
    isPrime = true;
  } else {
    isPrime = false;
    break;
  }
}

let result1 = ""
if(isPrime = true){
  result1 = "Bukan Bilangan Prima"
} else{
  result1 = "Bilangan Prima"
}

console.log(result1)

////sum of the N

let numb1= 6
let sum = ""

for(i=1; i<=numb1; i++){
  sum = Number(sum)+i
}
console.log(sum)

///factorial

let fac = 0
let sum2 = 1

for(i=1; i<=fac; i++){
  sum2 = sum2*i 
}
console.log(sum2);


///fibonacci


/*
1. 0
2. 1
3. 1
4. 2
5. 3
6. 5
7. 8
.
.
.
.

16. 
*/
let counter = 15
let firstNUmb = 0;
let secNumb = 1;
let result = 0

for(i = 2; i<= counter; i++){
  result = firstNUmb + secNumb
  console.log(i-1,".", result);
  firstNUmb = secNumb;
  secNumb = result
}

console.log(result)