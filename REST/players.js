module.exports = function(req, res) {
  if(req.method !== 'POST') {
    res.setStatus = 405
    res.end()
  }
}
