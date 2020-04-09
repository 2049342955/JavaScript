// 'use strict'

// var greet = require("./hello");
// var fs = require('fs');



// greet("World");


// process.nextTick(function () {
//     console.log('nextTick callback!');
// });
// console.log('nextTick was set!');

// // 程序即将退出时的回调函数:
// process.on('exit', function (code) {
//     console.log('about to exit with code: ' + code);
// });


// // var data = fs.readFileSync('./book.xml', 'utf-8');
// // console.log(data);




// // fs.readFile('./book.xml', 'utf-8', function (err, data) {
// //     if (err) {
// //         console.log("aaa");
// //         console.log(err);
// //     } else {
// //         console.log("bbb");
// //         console.log(data);
// //     }
// // });


// fs.readFile('1.png', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//         console.log(data.length + ' bytes');
//         //console.log( data.toString('utf-8'));
//     }
// });


// // var data = 'Hello, Node.js';
// // fs.writeFile('output.txt', data, function (err) {
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log('ok.');
// //     }
// // });

// fs.stat("./output.txt",function(err,stat){

//     if(err){
//         console.log(err);
//     }else{
//         console.log(stat.isFile());
//         console.log(stat.isDirectory());
//         if(stat.isFile){
//              // 文件大小:
//              console.log('size: ' + stat.size);
//              // 创建时间, Date对象:
//              console.log('birth time: ' + stat.birthtime);
//              // 修改时间, Date对象:
//              console.log('modified time: ' + stat.mtime);
//         }
//     }
// });


// var data = fs.createReadStream("./book.xml","utf-8");

// data.on("data",function(chunk){
//     console.log(chunk);
// });

// data.on("end",function(chunk){
//     console.log("end");
// });


// // var dat = fs.createWriteStream("./output.txt","utf-8");
// // dat.write('使用Stream写入文本数据...\n');
// // dat.end();

// // dat = fs.createWriteStream("./output.txt","utf-8");
// // dat.write("我又来了\n");
// // dat.end();

// var rs = fs.createReadStream('./book.xml');
// var ws = fs.createWriteStream('./output.txt');

// rs.pipe(ws);

// 导入http模块:
// var http = require('http');

// // 创建http server，并传入回调函数:
// var server = http.createServer(function (request, response) {
//     // 回调函数接收request和response对象,
//     // 获得HTTP请求的method和url:
//     console.log(request.method + ': ' + request.url);
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hello world!</h1>');
// });

// // 让服务器监听8080端口:
// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');



var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');

// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'
console.log(filePath);