const notFound = (req, res) => {
  res.status(404).send('<h1 style="color: red">404 Error: Not Found</h1>');
}

module.exports = notFound;