/**
 * let hasil = ganjilGenap(penjumlahan);
 * console.log(hasil);
 * function execute(){
 *  
 * 
 * */



//ARRAY FUNCTION
let arr = [2, 1, 5, 3, 12, 45];
//array.forEach(callback) : untuk mengakses setiap data dan index pada array
for(const value of arr){
  console.log(value)
}

arr.forEach((value,index) => {
    console.log(value);
    console.log(index);
  }
)
let result = ""
arr.forEach((value, index)=>{
  result += `${value} berada di index ${index}\n`
})

console.log(result)


//


let newArr = ["BMW", "TOYOTA", "LEXUS"]
function duplicateForEach(callbackfn,dataArr){
  // callbackfn = (value,index)=>{
  //   console.log(value);
  //   console.log(index);
  // }
  //dataArr = newArr
  for(i=0; i<dataArr.length; i++){
    value = dataArr[i]
    const modValue = callbackfn(value,i)
  }
}

duplicateForEach((value,index)=>{
console.log(value);
console.log(index);},newArr)


//ARRAY MAP
//array.map(callback) : untuk mengakses data dan index pada array sekaligus menghasilkan array baru dengan data yang baru
//

let numArr = [1, 2, 3, 4, 5]
let newNumArr = numArr.map((value,index) => {
  console.log(value);
  console.log(index);
  const multiple = value + 3
  console.log(multiple);
  return multiple
})

console.log(newNumArr);



let newArr1 = [1, 2, 3]

//callbackfn = (value,index)=>....../
function duplicateMap(callback,dataArr1){
  let res = []
  for(i=0; i < dataArr1.length; i++){
    value = dataArr1[i]
    console.log(value);
    res.push(callback(value,i))
    
  }
  return res
 
}

let vari = duplicateMap((value,index)=>{
  console.log(value);
  console.log(index);
  return value
},newArr1)

console.log(vari)



