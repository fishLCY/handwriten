// 当往可写流里写数据时，不会立即写入文件，而是先写入缓区，
// 缓冲区的大小就是highWaterMark,默认值是16k。
// 等缓冲区满了之后再真正的写入文件里
let fs=require('fs')
let ws=fs.createWriteStream('./test2.js',{
    highWaterMark:3,
})
// 缓冲区已满——>返回false;返回区未满——>返回true
// 返回false时，继续添加内容也不会丢失，会缓冲在内存中。
// 等缓冲区清空之后，再从内存中读取数据
let flag=ws.write(1)
console.log(fs)
flag=ws.write(2)
console.log(fs)
flag=ws.write(3)
console.log(fs)
flag=ws.write(4)
console.log(fs)
