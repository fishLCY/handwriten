const fs=require('fs')
// 创建一个可读流
let rs=fs.createReadStream('./test.js',{
    //  highWaterMark:缓冲区大下；为了提高效率，会使用缓冲区。缓冲区是在内存上，内存
    // 在硬盘上，所以读取快
            highWaterMark:2,
            // 设置从索引为2的位置开始读
            satrt:2,
            // 设置：这是唯一一个包括结束索引的
            end:4
        })
// 监听他的data事件，当你一旦开始监听data事件的时候，流就可以读文件的内容并且发射data
// 默认情况下，当你监听data事件后，会不停的读数据，然后触发data事件，触发完data事件后再次读数据
// 希望流有一个暂停和恢复触发的机制
rs.on('data',function(data){
    // 暂停读取和发射data事件
    rs.pause();
    // 恢复读取并触发data事件
    rs.resume();
})