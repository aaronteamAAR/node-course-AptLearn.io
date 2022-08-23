const url = require('url')


const indexUrl = new URL('https://aptlearn.io/courses/nodejs-for-backend-development/lesson/url-module/')

console.log(indexUrl.href)
console.log(indexUrl.hostname)
console.log(indexUrl.origin)