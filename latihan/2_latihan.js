let celci = 60;
let fahr = 9/5*celci + 32;

console.log(fahr)

let checkOdd = 4;
let primOdd = " "

if(checkOdd%2 == 0){
  primOdd = `${checkOdd} adalah bilangan genap`
} else{
  primOdd =`${checkOdd} adalah bilangan ganjil`
}
console.log(primOdd)

// prime number adalah angka yang habis dibagi dengan bilangan tersebut

// 7 % 2
// 7 : 3
// 7 : 4
// 7 : 5
// 7 : 6
// 7 : 7
//dilakukan loop untuk pembagi/modulus


let prime = 1;
let check = ""

for(i=2; i<prime; i++){

    if(prime%i != 0){
      check = "bilangan prima"
    } else{
      check = "bukan bilangan prima"
      break;
    }
}

console.log(check);




///aritmatika

let en = 5;
let num = ""

for(i=1; i<=en; i++){
 num = Number(num) + i
 
}
console.log(num)



////geometri

let numb = 6;
let num1 = 1;

for(i=1; i<=numb; i++){
  num1 = num1*i
}

console.log(num1)



//fibonacci

/*
0. 0
1. 1
2. 1
3. 2
4. 3
5. 5
6. 8
7. 13

counter = 4 -> 5
first num = 1 -> firstnum = secnum
sec num = 2 -> secnum =result
result = first + sec = 3 -> 5




*/
let count = 15;
let firstNum = 0;
let secNum = 1;
let result = "";


if(count === 1){
  result = 1
}else{
  for(i=1; i<count; i++){
      result = firstNum+ secNum;
      console.log(result)
      firstNum = secNum
      secNum = result
    }
  }


console.log(result)






