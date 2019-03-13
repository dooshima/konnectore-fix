export default class KError {
    error;
    message;
    constructor(error, message) {
        this.error = error;
        this.message = message;
    }

    toObj() {
        return {
            error: this.error,
            message: this.message,
        }
    }
}