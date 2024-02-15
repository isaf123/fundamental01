
//array.filter(callback) : untuk mengakses setiap data dan index dari suatu array,
// sekaligus menghasilkan data array baru sesuai condition yang diberikan oleh callback function
// return harus dalam condition !!!!!!

let money = [1000, 500, 2000, 3000, 10000, 12000];

let newMoney = money.filter((val,idx) =>{
  console.log(val);
  console.log(idx);
  return val < 5000; //memberikan kondisi hanya mereturn uang dibawah 5000
});

console.log(newMoney);




function duplicateFilter(callback, array){
  let result1 =[]
  for(i=0; i <= array[i]; i++){
    value = array[i];
    console.log(value);
    let conditionResult = callback(value,i)
    console.log(conditionResult);
    if(conditionResult === true){
      result1.push(value)
    }
  }
  return result1
}

let filter = duplicateFilter((value, index)=>{
  console.log(value);
  console.log(index);
  return value < 5000;
},money)


console.log(filter)

