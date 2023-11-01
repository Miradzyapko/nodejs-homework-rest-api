const validateBody = require("../middlewars/validateBody")
const  isValidId  = require("../middlewars/jIsValidId");
const isEmptyBody = require("../middlewars/isEmptyBody");
const runValidatorsAtUpdate = require("../middlewars/runValidatorsAtUpdate")
const handleMongooseError = require("../middlewars/handleMongooseError")
const authenticate = require("../middlewars/authenticate");
module.exports = {
    validateBody,
    isValidId,
    handleMongooseError,
    runValidatorsAtUpdate,
    isEmptyBody,
    authenticate,
};