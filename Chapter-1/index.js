const fs = require('fs');
const option = { encoding: "utf-8" };
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(question) {
    return new Promise(resolve => {
        interface.question(question, (data) => {
            return resolve(data);
        });
    });
}

const data = `
Masukkan Pilihan Program yang akan dijalankan :

1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian
5. Akar Kuadrat
6. Luas Persegi
7. Volume Kubus
8. Volume tabung`;
console.log(data);

async function main() {
    let pilihan = await input("Masukkan Pilihan Anda : ");
    switch (pilihan) {
        case "1":
            var data1 = await input("Masukkan nilai 1 : ");
            var data2 = await input("Masukkan nilai 2 : ");
            var hasil = +data1 + +data2;
            console.log(`Hasil dari penjumlahan ${data1} + ${data2} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "2":
            var data1 = await input("Masukkan nilai 1 : ");
            var data2 = await input("Masukkan nilai 2 : ");
            var hasil = +data1 - +data2;
            console.log(`Hasil dari pengurangan ${data1} - ${data2} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "3":
            var data1 = await input("Masukkan nilai 1 : ");
            var data2 = await input("Masukkan nilai 2 : ");
            var hasil = +data1 * +data2;
            console.log(`Hasil dari perkalian ${data1} * ${data2} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "4":
            var data1 = await input("Masukkan nilai 1 : ");
            var data2 = await input("Masukkan nilai 2 : ");
            var hasil = +data1 / +data2;
            console.log(`Hasil dari pembagian ${data1} / ${data2} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "5":
            var data = await input("Masukkan nilai : ");
            var hasil = Math.sqrt(data);
            console.log(`Hasil dari akar kuadrat dari ${data} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "6":
            var data = await input("Masukkan Sisi : ");
            var hasil = +data * +data;
            console.log(`Hasil dari luas persegi dengan sisi ${data} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "7":
            var data = await input("Masukkan Sisi : ");
            var hasil = data ** 3;
            console.log(`Hasil dari volume kubus dengan sisi ${data} adalah ${hasil}`);
            console.log(" ");
            await main();

        case "8":
            var data1 = await input("Masukkan jari-jari : ");
            var data2 = await input("Masukkan tinggi : ");
            var hasil = 3.14 * +data1 * +data1 * +data2;
            console.log(`Hasil dari volume tabung dengan jari jari ${data1} dan tinggi ${data2} adalah ${hasil}`);
            console.log(" ");
            main();

        default:
            console.log("Angka yang ada masukkan tidak ada dipilihan, masukkan angka yang benar !!");
            await main();
    }
}

main();