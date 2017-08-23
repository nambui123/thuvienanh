import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdDialog } from '@angular/material';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import {AuthApi} from "../../service/auth.service"

@Component({
    selector: 'change-pass',
    templateUrl: 'changePassword.component.html',
    styleUrls: ['changePassword.component.css']
})

export class ChangePassComponent {

    constructor(
        @Inject(MD_DIALOG_DATA) private dialogData: any,
        private dialog: MdDialog,
        private fb: FormBuilder,
        private authApi: AuthApi,
    ) { }

    form: FormGroup;
    username = '';
    pass_false = false;
    pattern_pass: any = "^[a-zA-Z0-9-_\?\!\@\#\$\*]{6,20}$";
   
    ngOnInit() {
    }

    change=new FormGroup({
            old_pass:new  FormControl(),
            new_pass: new  FormControl(),
            re_new_pass: new  FormControl(),
            username:new  FormControl(),
        });

    Submit() {
        try {
            if (this.change.value.new_pass === this.change.value.re_new_pass) {
                this.authApi.ChangePassword(this.form.value);
                this.dialog.closeAll();
            }
            else {
                this.pass_false = true;
            }
        }
        catch (Ex) {
        }
    }
}