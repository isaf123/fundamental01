//bagaimana mengelompokkan suatu program

/**
 * - sekumpulan program untuk menyelesaikan proses khusus
 * - bersifat reuseable
 * - Function bersifat modular
 * - Built-in function : fungsi bawaan javascript
 * - User-defined function : fungsi yang dibuat sendiri
 * - Jenis function : 
 *    - Declarative function :
 *      function namaFunc(param1, param2, ....){
 *        //task program
 *      }
 * 
 *    - Function expression :
 *      const namaFunc = function(param1, param2, ...){
 *        // task program 
 *      }  ---> pastikan menggunakan const
 * 
 *    - Arrow function :
 *      const namaFunc = (param1, param2, ...)=>{
 *        // task program
*      }
* 
* - Function tidak harus menyiapkan/menerima parameter
* - Function memebutuhkan parameter ketika diperlukan value diluar function untuk dimasukkan
* - Ketika menggunakan parameter, pastikan data yang dimasukkan berurutan 
* - Function boleh menghasilkan nilai balik / return value atau tidak
* - 
*  
 *      
 *
 */


//declaration function
function penjumlahan(){
  let angkaA = 20;
  let angkaB = 15;
  let hasil = angkaA + angkaB;
  console.log("proses Penjumlahan :", hasil ); 
  // console untuk memeriksa fungsi berjalan
  return hasil; //return untuk mengeluarkan value dari function
}

//memanggil function
penjumlahan;

//menjalankan function
penjumlahan();
console.log("Output Function =",penjumlahan())

//return di tulis pada akhir text

function pengurangan(angkaA, angkaB){
  const hasil = angkaA - angkaB;
  console.log("Cek pengurangan :", hasil);
  return hasil;
};

let hasilPengurangan = pengurangan(20,18);
console.log(hasilPengurangan)
console.log(typeof(pengurangan))
//dimasukkan variabel jika ingin mengelola hasil fungsi lagi

//Parameter default value
function perkalian(angkaA = 0, angkaB = 0){
  console.log(angkaA,angkaB);
  const hasil = angkaA*angkaB
  return hasil
}

perkalian(2)
console.log(perkalian());


function cek(value){
  let result =""; 
  const modValue = value%2;
  console.log(modValue)

  result = modValue? "ganjil" : "genap";  //ternary operator
  // if(!modValue){
  //   result = "genap"
  // }else{
  //   result = "ganjil"
  // }

  return result
}


console.log(cek(1))

//Arrow Function
const cek1 = (value) => (value%2 === 0 ? "Genap": "Ganjil");
console.log(cek1(8));

//Callback Function : sebuah function yang dimasukkan dalam function lain melalui parameter yang disediakan

function ganjilGenap(callback){
  console.log(callback());

  const modValue = callback()%2
  let result = "";
  if(!modValue){
    result = "genap"
  } else{
    result = "ganjil"
  }
  return result
}


let hasil = ganjilGenap(penjumlahan);

console.log(hasil) // tidak perlu kurung karena hanya dipanggil, dijalankannya didalam function

//jika membutuhkan parameter
//function excb(){
  //return pengurangan(20,2)
//}

//hasil = ganjilGenap(excb) =============
console.log(hasil)

//anonymous function
hasil = ganjilGenap(function(){
    return pengurangan(8,4)
  }
)

console.log(hasil);

//anonymous function arrow--------->digunakan saat memakai multiple function dengan menggunakna parameter
hasil = ganjilGenap(()=>
  pengurangan(8,4)
)

console.log(hasil);


////

function ganjilGenap(callback, angkaA, angkaB){
  //callback : (valueA, valueB) => valueA-valueB
  console.log(callback);
  //angkaA = 
  console.log(angkaA);
  console.log(angkaB);

  const modValue = callback(angkaA,angkaB)%2
  let result = "";
  if(!modValue){
    result = "genap"
  } else{
    result = "ganjil"
  }
  return result
}

let hasil2 = ganjilGenap((valueA,valueB) => valueA-valueB,10,8);
console.log(hasil2) //-----> digunakan untuk memberikan fungsi dan value parameter 

function ganjilGenap(callback){
  //callback : (valueA, valueB) => valueA-valueB
  console.log(callback);
  console.log(typeof(callback))
  let angkaA = Math.round(Math.random()*10)
  console.log(angkaA);
  let angkaB = Math.round(Math.random()*10)
  console.log(angkaB);


  const modValue = callback(angkaA,angkaB)%2
  let result = "";
  if(!modValue){
    result = "genap"
  } else{
    result = "ganjil"
  }
  return result
}


let hasil3 = ganjilGenap((valueA,valueB) => valueA-valueB);
console.log(hasil3)











