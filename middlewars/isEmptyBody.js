
const { HttpError } = require("../helpers/index"); 

const isEmptyBody = (req, res, next) => {
    if (!Object.keys(req.body)) {
      next(HttpError(400, "All fields empty"));
    }
    next();
  }
  module.exports = isEmptyBody;