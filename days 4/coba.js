
let dataMoney = [100, 5000, 2000, 1000, 10000, 12000, 30000]

function duplicateFilter(callback,array){
  for(i = 0; i < array){

  }
}



duplicateFilter((value,index)=>
  console.log(value),
  console.log(index),
dataMoney)

/////////////////
function duplicateFilter(callback, array){
  let result1 =[]
  for(i=0; i <= array[i]; i++){
    value = array[i];
    console.log(value);
    result1.push(callback(value,i))
  }
  return result1
}

let filter = duplicateFilter((value, index)=>{
  let result2 = []
  
  result2
  console.log(value);
  console.log(index);
  return value
},money)


console.log(filter)