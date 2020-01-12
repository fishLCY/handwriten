//  1.带var和function关键字声明相同的名字，这也算是重名了
// （其实是一个fn,只是存储至的类型不一样）
// var f=2;
// function f(){
//     console.log(12)
// }

// 2.重名的处理：不会重新的声明，但是会重新的赋值(无论是变量的提升还是代码执行阶段)
// var f=10
function f(){console.log(1)}
f()
function f(){console.log(2)}
f()
function f(){console.log(3)}
f()
var f=10;/* 带var的在提升阶段只把声明处理了，赋值操作没有处理，所以在代码执行的时候要完成赋值*/
function f(){console.log(4)}
f()