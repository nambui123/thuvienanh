import { Component } from '@angular/core';
import { MdMenuTrigger, MdDialog, MdDialogConfig } from '@angular/material';
import { AuthApi } from "../../service/auth.service"
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import * as $ from 'jquery';
declare var jQuery:any;
@Component({
  selector: 'success',
  templateUrl: './success.component.html',
  styleUrls: ['success.component.css']
})
export class SuccessComponent {
  constructor(
    private mdDialog: MdDialog,
    private authApi: AuthApi
  ) { }
  form: FormGroup;
  username = '';
  pass_false = false;
  pattern_pass: any = "^[a-zA-Z0-9-_\?\!\@\#\$\*]{6,20}$";
  change = new FormGroup({
    old_pass: new FormControl(),
    new_pass: new FormControl(),
    re_new_pass: new FormControl(),
    username: new FormControl(),
  });

  about() {

  }
  openHelp() {

  }
  openChangePassModal() {
    jQuery("#myModal").modal("show");
  }
  logout() {
    this.authApi.Logout()
  }
  ChangePass() {
    try {
      if (this.change.value.new_pass === this.change.value.re_new_pass) {
        this.authApi.ChangePassword(this.form.value);
      }
      else {
        this.pass_false = true;
      }
    }
    catch (Ex) {
    }
  }
}