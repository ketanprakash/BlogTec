const logger = (req, res, next) => {
  console.log(req.url, req.method, req.hostname);
  next();
}

module.exports = logger;