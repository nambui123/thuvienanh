
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { FooterComponent } from './footer.component';

const routing = RouterModule.forChild([
    {
        path: '',
        component: FooterComponent
    }
]);
@NgModule({
  imports: [
    routing,
  ],
  declarations: [
    FooterComponent
  ],
  exports:[FooterComponent]
  
})
export class FooterModule { }
