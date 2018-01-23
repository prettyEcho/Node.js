//require.resolve()返回加载文件的绝对路径，但是不会加载模块。
console.log(require.resolve('../globle/globle')); 

//require.resolve.paths()返回一个数组，其中包含解析 request 过程中被查询的路径。
console.log(require.resolve.paths('../globle/globle'));

module.id = 'echo';

