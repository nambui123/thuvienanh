import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {appRouting} from './app.routing';
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import { HomeModule } from "./home/home.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    appRouting,BrowserModule,FooterModule,HeaderModule,HomeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
