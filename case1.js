// Case 1 (Soal No.1-4)
// Andi menjual beraneka ragam buah. Diketahui catatan buah yang
// dimiliki Andi saat ini adalah sebagai berikut.

const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// 1. Buah apa saja yang dimiliki Andi? (fruitName)

const fruitAndi = fruits.map((fruit) => fruit.fruitName);
console.log(fruitAndi);
// output [ 'Apel', 'Kurma', 'apel', 'Manggis', 'Jeruk Bali', 'KURMA', 'Salak' ]

// 2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan
// tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah
// apa saja di masing-masing wadah?

const fruitTypes = [];
let jumlahWadah = 0;
// buah yang ada di wadah
const fruitInWadah = [];

for (const fruit of fruits) {
  const fruitType = fruit.fruitType;
  // supaya tidak duplikat typenya
  if (!fruitTypes.includes(fruitType)) {
    fruitTypes.push(fruitType);
  }
}
jumlahWadah = fruitTypes.length;

for (let i = 0; i < jumlahWadah; i++) {
  fruitInWadah.push({
    type: fruitTypes[i],
    fruits: fruits
      .filter((fruit) => fruit.fruitType == fruitTypes[i])
      .map((fruit) => fruit.fruitName),
  });
}
console.log(fruitTypes);
console.log(jumlahWadah);
console.log(fruitInWadah);

// 3. Berapa total stock buah yang ada di masing-masing wadah?
const stock = [];

for (let i = 0; i < jumlahWadah; i++) {
  stock.push({
    type: fruitTypes[i],
    totalStock: fruits
      .filter((fruit) => fruit.fruitType == fruitTypes[i])
      .reduce((a, c) => a + c.stock, 0),
  });
}

console.log(stock);

// 4. Apakah ada komentar terkait kasus di atas? 
// kasusnya cukup menantang dan cukup kompleks.
