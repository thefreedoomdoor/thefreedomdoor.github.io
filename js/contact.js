const fs = require('fs');
const path = require('path');

// 指定你想要读取的文件夹路径
const folderPath = '../inside/blogs';

// 读取文件夹
fs.readdir(folderPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  // 打印文件和文件夹名
  files.forEach(file => {
    console.log(file);
  });
});