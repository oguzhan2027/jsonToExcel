const fs = require('fs');
const xlsx = require('xlsx');

// JSON dosyasını okuyun
const jsonFilePath = 'C:/dosyayolu.json';
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// JSON verilerini işleyin
const dataToWrite = jsonData.map(item => ({
  userName: item.userName,
  eMailAddress: item.eMailAddress,
  name: item.name,
  surname: item.surname,
 status: item.status === 0 ? 'aktif' : 'pasif'
}));

// Yeni bir excel oluşturun
const workbook = xlsx.utils.book_new();

// Verileri bir excele ekleyin
const worksheet = xlsx.utils.json_to_sheet(dataToWrite);
xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Excel dosyasını kaydedin
const excelFilePath = 'output1.xlsx';
xlsx.writeFile(workbook, excelFilePath);

console.log(`Excel dosyası başarıyla oluşturuldu: ${excelFilePath}`);