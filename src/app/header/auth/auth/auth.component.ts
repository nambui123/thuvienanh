import { Component } from "@angular/core";
import { IsLogin } from "../../service/auth.service";
import { MdMenuTrigger, MdDialog, MdDialogConfig } from '@angular/material';
import {LoginComponent} from "../login/login.component"

@Component({
    selector: "auth",
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    constructor(private mdDialog: MdDialog) {
        this.isLogin = IsLogin.value;
    }
    isLogin: boolean;
    showModal() {
        const config = new MdDialogConfig();
        config.width = '350px';
        const dialog = this.mdDialog.open(LoginComponent, config);
    }
}