import { Component } from "@angular/core";
import { IsLogin } from "../../service/auth.service";
// import { MdMenuTrigger, MdDialog, MdDialogConfig } from '@angular/material';
// import {LoginComponent} from "../login/login.component"
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApi } from "../../service/auth.service";
import { Toast } from "../../../shared/noti/toastr";
import * as $ from 'jquery';
@Component({
    selector: "auth",
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    // constructor(private mdDialog: MdDialog) {
    //     this.isLogin = IsLogin.value;
    // }
    // isLogin: boolean;
    // showModal() {
    //     const config = new MdDialogConfig();
    //     config.width = '350px';
    //     const dialog = this.mdDialog.open(LoginComponent, config);
    // }
    constructor(
        private authApi: AuthApi) { }
    ngOnInit() { }
    toast = new Toast;
    page = 'login';
    title = "Login";
    register_err = "";
    login_err = "";
    login_form = new FormGroup({
        username: new FormControl(),
        password: new FormControl(),
    });
    register_form = new FormGroup({
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        rp: new FormControl(),
    });

    loginPage() {
        this.page = 'login';
        this.title = "Login"
    }
    registerPage() {
        this.title = "Register"
        this.page = 'register';
    }
    login() {
        const login = this.login_form.value;
        console.log("asda")
        if (login.username === null || login.password === null) {
            this.login_err = "Tên hoặc mật khẩu không rỗng!"
            return
        }
        this.authApi.Login(this.login_form.value).subscribe(v => {
            console.log(v);
        }, err => {
            this.login_err = err.message;
        });
    }
    register() {
        const register = this.register_form.value;
        if (register.username === null || register.email === null || register.password === null) {
            this.register_err = "Bạn hãy điền đầy đủ thông tin!"
            return
        }
        if (register.rp != register.password) {
            this.register_err = "Các mật khẩu này không khớp. Thử lại?"
            return
        }
        this.authApi.Register(this.register_form.value).subscribe(v => {
            this.loginPage();
            alert("Đăng kí thành công");
        },
            err => {
                alert(err.message);
            })
    }
    back() {
        this.title = "Login";
        this.page = 'login';
    }
}