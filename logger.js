const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

const alterFile = (file) => {
  console.log('alter', file);
  readFile(file)
    .then(text => {
      return text.toString().toUpperCase();
    }).then(text => {
      console.log('write');
      writeFile('file.txt', Buffer.from(text));
    });
};

socket.on('error-message', handleError); 

socket.on('file-read', alterFile);

const handleError = () => {
  console.log('error');
};