
const { HttpError } = require("../helpers/Errors"); 

const isEmptyBody = (req, res, next) => {
    if (!Object.keys(req.body)) {
      next(HttpError(400, "All fields empty"));
    }
    next();
  }
  module.exports = isEmptyBody;