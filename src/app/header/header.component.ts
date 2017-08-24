import {Component} from "@angular/core"
import { IsLogin } from "./service/auth.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent {
    constructor(){
    }
    ngOnInit(){
      IsLogin.subscribe(v=>{
        this.isLogin=v;
      })
    }
    isLogin=false;
}
