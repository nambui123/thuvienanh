import { NgModule } from "@angular/core"
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router"
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MdMenuModule, MdDialogModule } from '@angular/material';
import { HttpServiceGenerator } from "../service/http_service_generator";
import { HeaderComponent } from "./header.component"
import { FilterApi } from "./service/filter.service"
import { AuthApi } from "./service/auth.service"
import { AuthComponent } from "./auth/auth/auth.component"
import { SuccessComponent } from "./auth/success/success.component"
import { ChangePassComponent } from "./auth/success/changePassword.component"
import { CategoryComponent } from "./filter/category/category.component"
import { SearchComponent } from "./filter/search/search.component"
import { LogoComponent } from "./filter/logo.component"
const routing = RouterModule.forChild([
    {
        path: '',
        component: HeaderComponent
    }
]);

@NgModule({
    imports: [routing, CommonModule, BrowserModule, NoopAnimationsModule, BrowserAnimationsModule, HttpModule, ReactiveFormsModule, FormsModule, MdMenuModule, MdDialogModule],
    declarations: [HeaderComponent, AuthComponent, SuccessComponent, CategoryComponent, SearchComponent, LogoComponent, ChangePassComponent],
    exports: [HeaderComponent],
    providers: [FilterApi, AuthApi, HttpServiceGenerator],
     entryComponents: [
         ChangePassComponent
    ]
})
export class HeaderModule {

}