import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SinginComponent} from "../singin/singin.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AppLogicService} from "../../services/app-logic.service";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    LoginComponent,
    SinginComponent,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  constructor(

    protected serviceLogic: AppLogicService,

  ){}

  usuario:boolean = false;
  User:string = "Iniciar Sesión"

  logIn(){

  this.serviceLogic.formsState=1;

  }

  singIn(){
    this.serviceLogic.formsState=2;
  }

}
