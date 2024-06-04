import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SinginComponent} from "../singin/singin.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    LoginComponent,
    SinginComponent,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  showLogin:number = 0;
  buttonText:string = "Iniciar sesión";

  logIn(){



  }

  cambiarFormulario(){
    this.buttonText = "Iniciar sesión"

    this.showLogin ++;



  }

}
