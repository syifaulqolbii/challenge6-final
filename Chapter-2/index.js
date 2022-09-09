// const prompt = require('prompt-sync')();

// console.log("Masukkan nilai");

// const data = prompt(' ');
// const arr = data.split(' ');
// const arrNum = arr.map(str=>{
//   return Number(str);
// });

// let lulus = [];
// let remidi = [];


// console.log('\n');
// console.log(`Data Nilai Siswa Sebagai Berikut : ${arrNum}`);

// function nilaiTertinggi(){
//   const max = Math.max.apply(null, arrNum);
//   console.log(`Nilai tertinggi adalah : ${max}`);
// }
// function nilaiTerendah(){
//   const min = Math.min.apply(null, arrNum);
//   console.log(`Nilai terendah adalah : ${min}`);
// }

// function lulusOrNot(){
//   arrNum.forEach((array) => {
//     if (array >= 60) {
//         lulus.push(array)
//     } else if (array < 60) {
//         remidi.push(array)
//     }
//   })
//   console.log(`Jumlah siswa yang lulus : ${lulus.length}`)
//   console.log(`Jumlah siswa yang tidak lulus : ${remidi.length}`)
// }

// function urutNilai() {
//   const urut = arrNum.sort(function(a,b) {
//     return a - b;
//   });
//   console.log(`Urutan nilai dari yang terendah ke yang tertinggi adalah : ${urut}`);
// }

// function cariNilai() {
//   const cari = arrNum.filter(cari => cari == 90 || cari == 100);
//   console.log(`Siswa dengan nilai 90 dan 100 : ${cari}`)
// }

// nilaiTertinggi();
// nilaiTerendah();
// lulusOrNot();
// urutNilai();
// cariNilai();

const cari = (values) => {
  let cariNilai = values.filter(cari => cari == 90 || cari == 100);
  return cariNilai
}

console.log(cari([90, 90, 100, 78]));