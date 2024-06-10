import {Component, EventEmitter, Output} from '@angular/core';
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

  showLogin: number = 0;


  logIn(){

  this.showLogin=1;
  alert(this.showLogin)

  }

  singIn(){
    this.showLogin=2;
    alert(this.showLogin)
  }

  cambiarFormulario(){

    this.showLogin==0;



  }

}
