import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    LoginComponent
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  showLogin:boolean = false;
  buttonText:string = "Iniciar sesión";

  logIn(){



  }

  cambiarFormulario(sehaLogueado:boolean = false){
    this.buttonText = "Iniciar sesión"

    this.formularioAbierto = !this.formularioAbierto

    if(sehaLogueado){
      this.buttonText = "Cerrar sesión "
    }else{
      this.service.closeSesion()
    }
  }

}
