// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('form.html',(err, data) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// const http = require("http");

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.write(`this is jeevan`);
//     res.end();

// }).listen(6050);


// const y = function(a,b){
//     return(a*b);
    
// }

// console.log(y(5,3))

// x = 5;
// z= 4;
// result = (x+z);
// console.log(`this is a result ${x} and ${z} is ${result}`);

// // const os = require("os");
// // console.log(os.homedir());
// // console.log(os.version());
// // console.log(os.type());
// // console.log(__filename);

// const path = require("path");
// const fs = require('fs');


// // fs.writeFile(path.join(__dirname, 'JK', 'hlo.txt'),'this is new file',(err) => {
// //     if (err) throw err;
// //     console.log("write completed");
// // })


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rajjeeva4u@gmail.com',
    pass: 'kfub xbtb himp zdgw'
  }
});

var mailOptions = {
  from: 'rajjeeva4u@gmail.com',
  to: '7056jeevanraj@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

