// loger middleware
// log the request method and url to the console
  const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
export { requestLogger };