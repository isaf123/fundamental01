
/**
 * Array
 * - tipe data yg berisi sekumpulan data yang memili tipe yang sama atau berbeda-beda
 * - Setiap data pada array memiliki index/alamat dimulai dari 0
 * 
 * 
 * Tujuan : untuk mempermudah pengelolaan data
 * type : object
 * ditandai dengan simbol : [data1, data2....]
 * 
 * 
 * 
 * 
 * 
 */

//example :

let buah1 = "Apel";
let buah2 = "Jeruk";
let buah3 = "Semangka";

// cara 1
let buah = ["Apel", "Jeruk", "Semangka"];
console.log(buah);

//cara 2
let stock = Array(10, 12, 30, ); // fungsi bawaan array
console.log(stock);

//cara3
let harga = [];
harga[0] = 20000;
harga[1] = 10000;
harga[2] = 15000;
console.log(harga);

//cara akses data pada array -> namaVariableArray(index_datanya)
//tipe data index harus dalam number bukan string
console.log(buah[1]);

buah[1] = "lemon"
console.log(buah);
console.log(`${buah[0]} stock ${stock[0]} harganya ${harga[1]}`);

//

let fruit = ["apel", "Jeruk", "Semangka"];
let jumlah = [10, 12, 30];
let harga1 = [20000, 10000, 16000]
let text = ""

for(i=0; i < fruit.length; i++){
  text = text + `${i+1}. Buah ${fruit[i]}, stocknya ${jumlah[i]} harganya Rp. ${harga1[i]}\n`
}

console.log(text)

/*ARRAY FUNCTION
 
*/

// array.length : untuk mengetahuu jumlah data dalam array
// output : data berupa integer

console.log("length buah :", buah.length);

console.log("Last data : " + buah[buah.length-1])

//- array.push : untuk menambahkan data baru diakhir array
buah.push("Mangga");
console.log(buah);
buah[buah.length] = "Melon"
console.log(buah)

// array.pop : untuk menghapus data pada index terakhir dalam array
buah.pop();
console.log(buah);

//array.unshift : untuk menambahkan data di awal array
buah.unshift("durian");
console.log(buah);

//array.shift :untuk menghapus diawal
buah.shift();
console.log(buah);


//array.splice :  digunakan untuk mengelola data array
//array.splice(index awal, jumlahData, dataBaru)

//1. menghapus data pada index tertentu
buah.splice(1,1); //menghapus mulai index 1 dengan jumlah 1 data
console.log(buah);

//2. Menyisipkan data baru mulai pada index ter tentu
buah.splice(1, 0, "Jeruk", "Lemon");
console.log(buah)
   //splice lebih sering digunakan untuk hapus

//3. Mengganti data
buah.splice(1,1,"Melon")
console.log(buah)
// atau 
buah[1] = "Melon";

//array.indexOf : untuk mengetahui alamat suatu data atau index keberapa
console.log(buah.indexOf("Melon"));
console.log(buah.indexOf("Jeruk"));
  //-1 menunjukkan tidak ada dalam array

//array.slice : untuk mengambil sebagian data
console.log(buah.slice(1,3));

//array.join : untuk menggabungkan data array menjadi string
console.log(buah.join(" \n "));

//array.reverse : untuk membalikkan urutan data
console.log(buah.reverse());

//array.sort : untuk mengurutkan data ascending atau descending
console.log(buah);
console.log(buah.sort());
let numbers = [12, 11, 2, 3, 1, 44, 52, 43];
console.log(numbers);
console.log(numbers.sort());

let numberAsc = numbers.sort(function (a,b){
  return a-b
});
console.log(numberAsc);

let numberDesc = numbers.sort(function(a,b){
  return b-a
})
console.log(numberDesc);

//quicksort
//Bubblesort
//Selectionsort

//IMMUTABLE dan MUTABLE

//IMMUTABLE : tipe data yang tidak bisa dirubah
// string, number, boolean,
const PI = 3.14;
console.log(PI);
const newPI = Math.round(PI);
console.log(PI);
console.log(newPI);

//MUTABLE :tipe data yang bisa berubah 
const angka = [3, 46, 2, 1, 13, 7];
const newAngka = angka.reverse();
const newAngka1 = [...angka].reverse() //spread operator untuk menyalin isi array
console.log(angka);
console.log(newAngka);
console.log(newAngka1);



//newAngka merupakan angka yang dirubah
//newAngka berupa pointer untuk merubah angka


// for...of : digunakan untuk mengakses value suatu array

for (const value of buah) {
  console.log(value);
}











