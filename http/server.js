let http = require("http");
let url = require('url');
let querystring = require('querystring');

function start(req, res){
    //req: http.IncomingMessage类
    //res: http.ServerResponse类
    if(req.method.toUpperCase() == "GET"){
        //get服务器
        /*
         隐试响应头
            1.为一个隐式的响应头设置值。 如果该响应头已存在，则值会被覆盖。 如果要发送多个名称相同的响应头，则使用字符串数组。
            2.response.setHeader() 设置的响应头会与 response.writeHead() 设置的响应头合并，且 response.writeHead() 的优先。
         */
        res.setHeader('Content-Type', 'text/json');

        //接受请求的url
        let getUrl = req.url;

        //解析url
        let parseUrl = url.parse(getUrl, true);
        console.log(parseUrl);

        let body = parseUrl.query;
        /* 
         显式响应头
            1.指定'Content-Length'，表明采用的是缓冲模式进行传输，目的是告诉浏览器这次传输结束的标志，因此必须明确指定长度，可以用Buffer.byteLength(body)计算得出。
            2.但是每次都计算长度，计算成本很大，可以采用流模式替代缓冲模式，其标志是指定'Transfer-Encoding': 'chunked',这样可以不用指定'Content-Length'.         
        */
        res.writeHead('200',{
            'Content-Type': 'text/json',
            'Transfer-Encoding': 'chunked'
        });
        /* 
            返回的消息
                1.如果该方法被调用且 response.writeHead() 没有被调用，则它会切换到隐式响应头模式并刷新隐式响应头。
                2.当全部数据被成功刷新到内核缓冲区，则返回 true。 如果全部或部分数据还在内存中排队，则返回 false。 
                3.当一个数据块刷新时，callback被调用。    
        */
        //todo:为什么先显示true？？？
        let result = res.write(JSON.stringify(body), function(){
            console.log('发送了一个数据块');
        });
        console.log(result);
        //响应结束
        res.end();
    }else if(req.method.toUpperCase() == "POST"){
        //post服务器

        res.writeHead(200, {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Transfer-Encoding': 'chunked',
            'Access-Control-Allow-Origin': 'www.baidu.com'
        });

        //如果不设置setEncoding，默认接受方式为buffer模式
        req.setEncoding('utf8');

        //数据处理
        let postData = '';

        req.on('data', chunk => {
            postData += chunk;
        });

        req.on('end', () => {
            // let parseData = JSON.parse(postData); //解析接到的数据json
            // let stringifyData = JSON.stringify(parseData); //字符串化数据，准备返回json

            let parseData = querystring.parse(postData); //解析接到的数据json
            let stringifyData = querystring.stringify(parseData); //字符串化数据，准备返回json

            console.log(`得到的解析数据为:`);
            console.dir(parseData);
            res.write(stringifyData);
            res.end();
        })
    }
}

//返回http.Server类
//每一次接受请求时都会触发http.clientRequest的request事件（start）
let server = http.createServer(start);


server.listen(3000);