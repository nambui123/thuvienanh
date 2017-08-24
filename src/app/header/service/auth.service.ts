import { Injectable } from "@angular/core"
import { HttpServiceGenerator } from "../../service/http_service_generator"
import { ApplicationStore } from "../../../store/application_store"
import { IUser } from "../../model/user"
import "rxjs/add/operator/do";
import {BehaviorSubject} from "rxjs/BehaviorSubject"
interface ISession {
    id?: string;
}

interface ILoginReply {
    session: ISession;
}
export interface IChangePass {
    username: string;
    old_pass: string;
    new_pass: string;
    re_new_pass: string;
}
export const IsLogin=new BehaviorSubject<boolean>(false);
export const ModalChangePass=new BehaviorSubject<boolean>(false);
export const AppStorage = new ApplicationStore();
@Injectable()
export class AuthApi {
    constructor(
        private httpServiceGenerator: HttpServiceGenerator,
    ) { }

    Login(u: IUser) {
        return this.api.Post<ILoginReply>("login", {}, u)
            .do(data => {
                IsLogin.next(true);
                AppStorage.Token = data.session.id;
            });
    }
    Register(u: IUser) {
        return this.api.Post<IUser>("register", {}, u)
    }
    Logout() {
        IsLogin.next(false);
        AppStorage.ClearToken();
    }
    ChangePassword(v: IChangePass) {
        this.api.Post<string>("change_pass", {}, v).subscribe(v => {
           console.log("ok")
        }, e => {
           console.log("error")
        });
    }
    private api = this.httpServiceGenerator.make<any>("/api/auth");
}