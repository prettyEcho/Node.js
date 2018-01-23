console.dir(process.env);

process.env.NODE_ENV = 'production';

console.log(process.env.NODE_ENV);

delete process.env.NODE_ENV;

console.log(process.env.NODE_ENV);