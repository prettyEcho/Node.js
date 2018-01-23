/* 
    id: 模块的标识符。 通常是完全解析后的文件名
    exports: 模块的导出
    parent: 引用该模块的模块
    children: 该模块引用的模块
    filename: 模块的完全解析后的文件名（绝对路径），同__filename
    loaded: 模块是否已经加载完成(true)，或正在加载中(false)
    paths: 模块的搜索路径 
*/

let http = require('http');
let child = require('./require.resolve');

//module.exports = exports = {}
console.log(exports);

//module.exports = exports = { 'name' : 'echo' }
module.exports.name = 'echo';
//true
console.log(module.exports === exports);

//module.exports = { 'name' : 'echo' }
//exports = { 'name': 'cherry' }  exports指向另一个地址
exports = { 'name': 'cherry' };
//false
console.log(module.exports === exports);

/* 
    总结：
        1.真正导出的对象是module.exports，exports只是module.exports一个引用
        2.当把module.exports或者exports指向另一个对象的地址，它们不在相等
        3.因此，如果想只想把一个对象导出，需要把该对象赋予module.exports而不是exports
*/

//模块对象
console.log(module);


 