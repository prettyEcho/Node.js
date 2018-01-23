let querystring = require("querystring");

let json = {
    "name": "echo",
    "age": 25,
    "week": "周一"
};

let data = querystring.stringify(json, "&", "=");

console.log(data);