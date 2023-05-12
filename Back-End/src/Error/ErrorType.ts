export class ErrorCustom extends Error {
    private _message;
    private _statusCode;
    private _status;

    constructor(message: string, status: boolean, statusCode = 500) {
        super(message);
        this._message = message;
        this._statusCode = statusCode;
        this._status = status;
    };

    get message() {
        return this._message;
    };
    get statusCode() {
        return this._statusCode;
    };
    get status() {
        return this._status;
    };
}