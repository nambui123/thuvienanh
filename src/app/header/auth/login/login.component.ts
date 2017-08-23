import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApi } from "../../service/auth.service";
import { Toast } from "../../../shared/noti/toastr";
import { MdDialogRef, MD_DIALOG_DATA, MdDialog } from '@angular/material';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(
    private dialog: MdDialog,
    private authApi: AuthApi) { }
  ngOnInit() { }
  toast = new Toast;
  page = 'home';
  title = "Login";
  register_err="";
  login_err="";
  login_form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  register_form = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    rp:new FormControl(),
  });

  loginPage() {
    this.page = 'lp';
    this.title = "Login"
  }
  registerPage() {
    this.title = "Register"
    this.page = 'rp';
  }
  login() {
    const login=this.login_form.value;
    if(login.username || login.password === null){
      this.login_err="Username or Password not null!"
      return
    }
    this.authApi.Login(this.login_form.value).subscribe(v => {
     console.log(v);
    },err=>{
      this.login_err=err.message;
    });
  }
  register() {
     const register=this.register_form.value;
    if(register.username || register.email || register.password === null){
      this.register_err="Bạn hãy điền đầy đủ thông tin!"
      return
    }
    if(register.rp !=register.password){
       this.register_err="Các mật khẩu này không khớp. Thử lại?"
      return
    }
    this.authApi.Register(this.register_form.value).subscribe(v => {
      this.loginPage();
      this.toast.Title('Info').Info("Đăng kí thành công").Show();
    },
      err => {
        this.toast.Title('Error').Info(err.message).Show();
      })
  }
  back() {
    this.title = "Login";
    this.page = 'home';
  }


}
