const fs = require('fs');
const path = require('path');

// // //create folder
// fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
//     if(err) throw err;
//     console.log('folder created....');
// });

// //create folder
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'Hello WORLD',
//     err=>{
//         if(err) throw err;
//         console.log('fILE written to ....');
// });

fs.readFile(
    path.join(__dirname,'/test','hello.txt'),'utf8',
    (err,data)=>{
        if(err) throw err;
        console.log('fILE written to ....');
});

fs.rename(
    path.join(__dirname,'/test','hello.txt'),
    path.join(__dirname,'/test','helloworld.txt'),

    err=>{
        if(err) throw err;
        console.log('fILE written to ....');
});

