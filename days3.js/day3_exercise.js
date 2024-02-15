
//tabel perkalian
let number = 9;
let result = ""

for(i = 1; i<=10; i++){
  result =result +` ${number} x ${i} = ${number*i}\n`
 console.log(`${number} x ${i} = ${result}\n`)
}
console.log (result)

//paliandrome

let textInput = "madam"
console.log(textInput.length)
console.log(textInput.slice(0,1))
let push =""
let pushArray = []
hasil =""

for(i = 0; i < textInput.length; i++ ){
  push = textInput.slice(i,i+1)
  pushArray.push(push)
  console.log(push)
}


console.log(pushArray)

for(i = 0; i < pushArray.length; i++){
  if(pushArray[i] != pushArray.reverse()[i]){
    hasil = "bukan paliandrome"
    break;
  } else {
    hasil = "paliandrome"
  }
}


console.log(hasil)


//convert cm to km

const centi = 1;
const kilo = centi/100000
console.log(`${kilo} km`);

//IDR currency
let price = 1000

console.log(price.toLocaleString("id", {
  style : "currency",
   currency:"IDR"}
   )
)

//splice character

let str = "Hello World"
let remove = "llo"

for(i=0; i < str; i++){

}
//mencari index ell berapa kemudian dihapus

//reverse

let textInp = "makan"
console.log(textInp.length)
console.log(textInput.slice(0,1))
let push1 =""
let pushArray1 = []
hasil2 =""

for(i = 0; i < textInp.length; i++ ){
  push1 = textInp.slice(i,i+1)
  pushArray1.push(push1)
  console.log(push1)
}

pushArray1.reverse()

for(i=0; i < pushArray1.length;i++){
  hasil2 = hasil2 +pushArray1[i]
}

console.log(hasil2)



