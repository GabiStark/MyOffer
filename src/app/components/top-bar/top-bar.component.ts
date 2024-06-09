import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SinginComponent} from "../singin/singin.component";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    LoginComponent,
    SinginComponent,
    MatIcon,
    MatFabButton,
    MatButton,
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  showLogin:number = 0;
  buttonText:string = "Iniciar sesión";

  logIn(){

  this.showLogin++;

  }

  cambiarFormulario(){

    this.buttonText = "Iniciar sesión"

    this.showLogin ++;



  }

}
