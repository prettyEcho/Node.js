let querystring = require("querystring");

let str = "name=echo&age=25&week=%E5%91%A8%E4%B8%80";

let data = querystring.unescape(str);

console.log(data);