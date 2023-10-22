const HttpError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
}
const ctrlWrapper = controller => {
    const func = async(req, res, next) => {
        try {
            await controller(req, res, next);
        }
        catch(error) {
            next(error);
        }
    }

    return func;
}

module.exports = {
    ctrlWrapper,
    HttpError
}