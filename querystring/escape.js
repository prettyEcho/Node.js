let querystring = require("querystring");

let str = "周一";

let data = querystring.escape(str);

console.log(data);