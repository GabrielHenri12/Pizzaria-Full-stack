export class ErrorCustom {
    private _message;
    private _status;

    constructor(message: string, status: boolean) {
        this._message = message;
        this._status = status;
    };

    get message() {
        return this._message;
    };
    get status() {
        return this._status;
    };
}