

export class ApplicationStore {
    constructor() {}
    token='';
    get Token() {
        return this.token || '';
    }

    set Token(token: string) {
        this.token = token;
    }

    HasToken() {
        return this.Token.length > 2;
    }

    ClearToken() {
        this.Token = "";
    }

}



