class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;

        Error.capture(this, this.constructor);
    }
}

module.exports = ErrorHandler;