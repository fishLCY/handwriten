// promise 中的错误处理
// 在promise 中处理错误,我们通常也是去try catch,但是 只能catch 到同步的错误,如果是异步的,
// 比如我们settimeout一下其实是catch不到的.来个栗子:
var promise = new Promise(function(resolve, reject){
    setTimeout(function(){
       reject('ok')
    }, 0)
    resolve('ok'); //输出
});
promise
    .then(function(value){ console.log(value) })
    .catch(()=> console.log('e'))

// 4. 不能捕获到错误
 try {
     new Promise((reslove,reject)=>{
         setTimeout(()=>{
             reject('error')
         },1000)
     })
 }catch(e){
     console.log(e)
 }
// 5. 不能捕获到错误
//      new Promise((reslove,reject)=>{
//          try {
//      setTimeout(()=>{
//              reject('---')
//          },1000)
//  }catch(e){
//      console.log(e.error)
//  })
// 6.不可以捕获到错误
//      new Promise((reslove,reject)=>{
//       setTimeout(()=>{
//          try {
//              reject('---')
//          }catch(e){
//      console.log(e)
//  })
// 7.通过Promise可以处理异常，但是不灵活
// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject('error')
//     }, 2000);
// }).then(()=>{},(e)=>{
//     console.log(e)
// })
// 8.在async,await内部可以捕获到异常,处理异常
// (async ()=>{
//     try{
//         await new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 reject('error')
//             },2000)
//         })
//     }catch(e){
//         console.log(e)
//     }
// })()
// 9.promise实例外调用catch
// (async ()=>{
//     await new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         reject('error')
//      },2000)
//     })
// })().catch((e)=>{
//     console.log(e)
// })





