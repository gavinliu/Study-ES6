
// let 变量声明，类似 var，但只在声明的代码块儿里有效，也就是 js 的变量终于有了块级作用域的概念

{
    let l = 'l';
    var v = 'v';
}
console.log(v);
// console.log(a);


// 这已特性的使用场景
// 1. for 循环

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);


console.log(foo);
var foo;


// ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// 这在语法上，称为“暂时性死区” （temporal dead zone，简称 TDZ）。
var tmp = 123;
{
    // console.log(tmp); // Error
    // tmp = 'abc'; // Error
    // typeof tmp; // Error
    typeof temptemp; // 比较一个没有声明的变量反而不报错。
    let tmp;
    tmp = 'abc';
}
console.log(tmp);


// 不允许重复声明
{
    let a = 10;
    // var a = 1; // 报错
}
{
    let a = 10;
    // let a = 1; // 报错
}
function func(arg) {
  // let arg; // 报错
}
function func(arg) {
  {
    let arg; // 不报错
  }
}
