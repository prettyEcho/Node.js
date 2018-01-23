//path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径。

let path = require("path");

let str = path.join('/foo', 'name', 'bar');
let str1 = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
let str2 = path.join('/foo','bar','..','baz');

console.log(str);
console.log(str1);
console.log(str2);