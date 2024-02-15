//LOOP STATEMENT

/**
 * 1. While Loop :digunakan ketika akhir loop tidak pasti 
 * aturan :
 * while(contition){
 *  //task
 * }
 */

let value = 10;
let count = 0;
while(value > 0){
  count++
if (count > 4){
   break;
  }
}
console.log(count);

//ada kondisi tidak bisa berjalan sama sekali



/**2. DO WHILE LOOP
 * Aturan penulisan :
 * do{
 *  //task
 * } while(condition)
 * 
 */


count = 0;
ref = 1;
do {count++;ref = ref +count;console.log(count); console.log(ref)
  
} 
while(count<10);



//kondisi akan pasti berjalan min 1x


/**3. FOR LOOP : digunakan ketika kita tahu batas looping
 * 
 * for(statement_1; statement_2; statement_3){
 *    //task
 * }
 *
 * statement 1 : deklarasi variabel yang mendefinisikan nilai awal dari batas loop
 * statement 2 : condition untuk memeriksa variabel pada statement_1 dengan batas loopingnya,apakah bernilai true
 * statement 3 : berisi fungsi increment atau decrement terhadap statement_1
 * 
 */

for(let value = 0; value < 5; value++){
  console.log(value);
}

// let i = 0 
// let GG =""
// let result = ""
// let keret = "kereta No. "

// for(i = 0; i < 10; i++){
//   if(i%2 === 0){
//     GG = "Ganjil"
//   } else{
//     GG = "Genap"
//   }
//   result = `${result + (i+1)} ${GG}\n`
// }

// console.log(result)

let result = ""

for(i = 1; i <= 10; i++){
  if(i%2 == 0){
    result = result + `Kereta No. ${i} Genap\n`
  }else{
    result = result + `Kereta No. ${i} Ganjil\n`
  }
}

console.log(result)