let querystring = require("querystring");

let urlString = "name=echo&age=25&week=%E5%91%A8%E4%B8%80";

console.dir(querystring.parse(urlString));