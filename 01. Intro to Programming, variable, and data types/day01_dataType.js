//String : untuk mendfinisikan huruf atau karakter
let namaToko = "Toko Olahraga\n Jl. Olahraga";
let nama_toko = 'Toko Olahraga';
let namatoko = `Toko Olahraga
Jl Pancasila`; //bisa dienter

let alamatToko = "jl. Pemuda no 12, Surabaya"

let alamatLengkap = nama_toko + " " +alamatToko; 

alamatLengkap = `Pak eko ${namatoko} ${alamatToko}` // menggunakan backtik untuk membuat spasi 

console.log(alamatLengkap)


////////////FUNGSI BAWAAN PADA TIPE STRING/////////////////

let greeting = "Hello, welcome to js code";

//typeof : memeriksa tipe data
console.log(typeof greeting);
console.log(typeof 12);

//string.length = menghitung panjang data string
console.log(greeting.length)

//string.indexOf("character") = mencari posisi suatu character
console.log(greeting.indexOf("o"))

//string.toLowerCase() = mengubah karakter ke huruf kecil
console.log(greeting.toLowerCase())
console.log(greeting.toLocaleUpperCase())

//string.charAt(index) = mencari huruf pada alamat yang dituju
console.log(greeting.charAt("0"))

//string.includes("character") = memastikan suatu kata ada pada value strung yang dimiliki
console.log(greeting.includes("welcome"))

//string.slice (indexAwal, indexAkhir) = mengambil bagian character tertentu berdasarkan index awal hingga sebelum index akhir
console.log(greeting.slice(2,5))



////////////////////////NUMBER/////////////////

//berupa nilai angka

let jarak = 1500; //nilai INT/Integer(bulat)
let berat = 90.25; // Nilai FLoat (desimal)

//aritmetika operator + / * - /
let hasil = jarak - 29
console.log(hasil)


//increment 
jarak++ // merupakan jarak = jarak + 1
console.log(jarak);
jarak+=5
console.log(jarak)

//decrement
// jarak = jarak - 1
jarak--
console.log(jarak);
jarak-=5


/////////////////////MATH OBJECT////////////////////////////

const PI = Math.PI;
console.log(PI);

//Math.abs() menjadikan semua nilai menjadi postif
console.log(Math.abs(-25));
console.log(Math.abs(22));
console.log(Math.abs(22)*-1);

//Math.round(), Math.ceil(), Math.floor() untuk pembulatan

console.log(Math.round(2.5))//dibulatkan ke terdekat
console.log(Math.round(2.3))

console.log(Math.ceil(2.1))// dibulatkan keatas
console.log(Math.ceil(2.9))

console.log(Math.floor(4.9))//dibulatkan kebawah
console.log(Math.floor(4.2))

//Parsing data
let price = "321.456"
console.log(typeof price)
//mengubah string menjadi number
console.log(parseInt(price))
console.log(parseFloat(price))

let angka = 15000;
console.log(angka.toString())
console.log(angka.toLocaleString("id", {
  style:"currency",
  currency:"IDR"}))

//memeriksa data apkah number
console.log(isNaN("A")) // is not a number
console.log(isNaN(2))
console.log(isNaN("23"))


/////////////////////////BOOLEAN///////////////////////////////
//memiliki dua nilai, TRUE or FALSE

let benar = true;
let salah = false;

//COMPARISON OPERATOR : >, <, >=, <=, ==, ===, !=
let angkaA = 20;
let angkaB = 15;

console.log(angkaA > angkaB);
console.log(angkaB > angkaA);
console.log(`Comparison ${angkaA} < ${angkaB}`, angkaA < angkaB)
console.log(`Comparison ${angkaB} == ${angkaA}`, angkaB == angkaA)
console.log(`Comparison ${angkaA} != ${angkaB}`, angkaB != angkaA)
console.log(`Comparison ${angkaA} === ${angkaB}`, angkaB === angkaA)

// == hanya nilai saja yang harus sama
// === untuk nilai dan jenis data yang sama
//penggunaan label untuk memberikan identitas console.log


//LOGICAL OPERATOR : AND (&&), OR (||), NOT (!)
console.log("Logical AND:", true && true)
console.log("Logical AND:", true && false)
console.log("Logical AND:", false && false)
console.log("Logical AND:", true && true)

console.log("Logical OR:", true || true)
console.log("Logical OR:", true || false)
console.log("Logical OR:", false || false)
console.log("Logical OR:", false || true)
console.log("Logical OR:", true || true)

console.log("Logical NOT:", !benar)
console.log("Logical NOT:", !salah)

/////////////////////OBJECT DATE//////////////////////
//fungsi bawaan berupa tanggal  untuk mengakses waktu 
const date = new Date (); // membuat instance dari class date
console.log(date);
console.log(date.toLocaleString());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getTime());













