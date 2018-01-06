const fs = require('fs-extra')
const { dir } = require("./helpers");


fs.move(dir('dist', 'index.html'), dir('index.html'),
  {overwrite: true}, function (err) {
  if (err) {
    // i.e. file already exists or can't write to directory 
    throw err;
  }
 
  console.log("Moved 'dist/index.html' to 'index.html'");
})
