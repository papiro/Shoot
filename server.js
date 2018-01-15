const 
  http = require('http'),
  fs = require('fs'),
  path = require('path')
,
  public = 'public',
  indexPath = path.join(public, 'index.html')
;

const server = http.createServer( (req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    const index = fs.createReadStream(indexPath)
    index.pipe(res)
  } else {
    const resource = fs.createReadStream(path.join(public, req.url))
    resource.on('error', err => {
      console.error('there was an error!:::', err)
      res.statusCode = 404
      res.end()
    })

    let mimeType = 'text/plain'
    switch (path.extname(req.url)) {
      case '.svg':
        mimeType = 'image/svg+xml'
        break
      case '.css':
        mimeType = 'text/css'
        break
    }
    res.setHeader('Content-Type', mimeType)
    resource.pipe(res)
  }
})

server.listen('5555', '127.0.0.1')
