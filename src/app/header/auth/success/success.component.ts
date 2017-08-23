import { Component } from '@angular/core';
import { MdMenuTrigger, MdDialog, MdDialogConfig } from '@angular/material';
import { AuthApi } from "../../service/auth.service"
import {ChangePassComponent} from "./changePassword.component"
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
  about() {

  }
  openHelp() {

  }
  openChangePassModal() {
    const config = new MdDialogConfig();
    config.width = '350px';
    const dialog = this.mdDialog.open(ChangePassComponent, config);
  }
  logout() {
    this.authApi.Logout()
  }
}