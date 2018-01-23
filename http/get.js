let http = require('http');

/* 
    http.request()
        1.返回一个http.clientRequest()实例。
        2.当请求的响应被接受时触发http.clientRequest类的response事件，该事件接受一个<http.IncomingMessage>的参数
        3.需要为http.clientRequest()实例设立监听事件以接受相应数据
*/
http.get('http://localhost:3000?name=echo&age=25', res => {
    console.log(`响应码：${res.statusCode}`);
    console.dir(res.headers);

    //错误处理
    let error = '';

    if(res.statusCode != 200){
        error = new Error('响应码不对');
    }

    if(error){
        console.error(error.message);
    }

    //接受的数据处理
    let getData = '';
    res.on('data', chunk => {
        getData += chunk;
    })

    res.on('end', () => {
        try{
            let data = JSON.parse(getData);
            console.log(data);
        }catch(e){
            console.error(e);
        }
    })
}).on('error', e => {
    console.error(e.message);
})