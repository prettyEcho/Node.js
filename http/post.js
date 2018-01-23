let http = require('http');
let querystring = require('querystring');

let option = {
    hostname: 'www.echo.com',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Transfer-Encoding': 'chunked',
        'Connection': 'keep-alive' //发送 'Connection: keep-alive' 会通知 Node.js，服务器的连接应一直持续到下一个请求。
    }
}

//json字符串
// let postData = JSON.stringify({
//     "name": "echo",
//     "age": 25
// })

//querystring
let postData = querystring.stringify({
    "name": "张建成",
    "age": 25
})

let req = http.request(option, res => {
    console.log(`响应码： ${res.statusCode}`);
    console.log(res.headers);

    //如果不设置setEncoding，默认接受方式为buffer模式
    res.setEncoding('utf8');

    let getData = '';

    res.on('data', chunk => {
        console.log(`响应体：${chunk}`);
        getData += chunk;
    })

    res.on('end', () => {
        console.log(querystring.parse(getData));
    })
})

//错误处理
req.on('error', e => {
    console.error(e);
}) 

req.write(postData);

req.end();