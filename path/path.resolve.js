/* 
    path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。
    给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径.
*/

let path = require('path');

let str = path.resolve('/foo', '/bar', 'baz');
let str1 = path.resolve('/foo', 'bar', '../baz');

console.log(str);   //  /bar/baz
console.log(str1); //  /foo/baz

