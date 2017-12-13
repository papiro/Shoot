const 
  http = require('http'),
  fs = require('fs')
,
  indexPath = './public/index.html'
;

const server = http.createServer( (req, res) => {
  if (req.url === '/') {
    const index = fs.createReadStream(indexPath)
    index.pipe(res)
  } 
})

server.listen('5555', '127.0.0.1')