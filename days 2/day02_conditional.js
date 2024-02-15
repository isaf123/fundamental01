//////CONDITIONAL STATEMENT///////////
/**
 * Jenis :
 * 1. IF statement : untuk 1 kondisi
 * 2. IF Else statement : untuk 2 kondisi 
 * 3. IF ELSE IF ELSE statement : untuk >= 2 kondisi
 * 4. SWITCH Case : memastikan nilai yang diberikan sesuai dengan case yang ditentukan
 * 
 * Aturan :
 * - membutuhkan nilai boolean
 * - 
 */



// 1. IF STATEMENT

/**
 * Aturan :
 * if(condition){
 *  // task
 * }
 * 
 * note :
 * - condition : kondisi yang diinginkan harus bernilai boolean :
 *  (comparison operator/ logical operator/TRUTHLY/FALSY)
 * - task : tugas apa yang ingin dijalankan ketika contition terpenuhi
 * 
 * 
 */


//Example case : Memeriksa nilai yang diatas 0 
// INPUT 
const value = 6;
if(value > 0){
  console.log("oke")
};

//2. IF..ELSE
/**
 * Aturan Penulisan :
 * if(condition){
 *  //task 
 * }else{
 *  //task
 * }
 * 
 * - task : Jika kondisi tidak terpenuhi maka akan menjalankan task didalam else
 */

//example case Memeriksa batas usia pembuatan kartu SIM

const name = "Leonard";
const age = 17;
const email ="leo@mail.com"
if(age >= 17){
  console.log(`Verifikasi usia ${name} berhasil, cek email: ${email} anda `)
}else{
  console.log(`Verifikasi usia ${name} gagal`)
};

// 3. IF..ELSE IF..ELSE

//example case : Menentukan grade nilai ujian
const examValue = 80;

if(examValue >= 90){
  console.log("Grade A")
} else if(examValue >= 80 && examValue<90 ){
  console.log("Grade B")
} else if(examValue >= 70 && examValue < 80){
  console.log("Grade C")
} else{
  console.log("Grade D")
};


//TRUTHLY and FALSY

//TRUTHLY
console.log(Boolean(" ")) //string
console.log(Boolean(12)) //number
console.log(Boolean([])) // array
console.log(Boolean({})) // array

//FALSY
console.log(Boolean(false)) // 
console.log(Boolean(0)) // 0
console.log(Boolean("")) // string kosong
console.log(Boolean(null)) // sebuah object yang tidak memiliki value 
console.log(Boolean(undefined)) // tidak ada definisi apapun
console.log(Boolean(NaN)) // not a number



//4. SWITCH CASE
//memeriksa tipe data string dan number dengan cek kesesuaian value

const profesi = "Dokter";

switch(profesi){
  case "Programmer":
    console.log("Butuh Laptop");
  break;  //break digunakan untuk stop perintah yang dilakukan
  case "Dokter":
    console.log("Butuh Stetoskop");
  break;
  default:
    console.log("Tidak Diketahui") //defult jika tidak ada case yang tidak sesuai
  break
}








