let json = {
    "name": "echo",
    "age": 25,
    "week": "周一"
};

let data = JSON.stringify(json);

console.log(typeof data);
console.log(data);

let str = JSON.parse(data);

console.log(str);