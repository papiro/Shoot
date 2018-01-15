const 
  http = require('http'),
  fs = require('fs'),
  path = require('path')
,
  public = 'public',
  indexPath = path.join(public, 'index.html')
,
  endpoint = {
    players: require('./REST/players')
  }
;

const server = http.createServer( (req, res) => {
  console.log(req.url)
  switch (req.url) {
    case '/':
      const index = fs.createReadStream(indexPath)
      index.pipe(res)
      break
    case '/players':
      endpoint.players(req, res)
      break
    default:
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
      break
  }
})

server.listen('5555', '127.0.0.1')
