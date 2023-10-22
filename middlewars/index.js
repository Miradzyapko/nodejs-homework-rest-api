const { validateBody} = require("../middlewars/validateBody")
const { isValidId } = require("../middlewars/jIsValidId");
module.exports = {
    validateBody,
    isValidId
};