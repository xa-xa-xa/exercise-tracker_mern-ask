const resErr = (err, res, status = 400, msg = 'ERROR: ') =>
  res.status(status).json(`(${msg}) ERROR: ` + err);

module.exports = resErr;
