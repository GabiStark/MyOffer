import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SinginComponent} from "../singin/singin.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LogicService} from "../../services/logic.service";

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


  protected servicioLogic: LogicService = new LogicService;
  usuario:boolean = false;
  User:string = "Iniciar Sesión"


  logIn(){

    this.servicioLogic.formState=1;

  }

  singIn(){
    this.servicioLogic.formState=2;
  }

  closeForms(){

    this.servicioLogic.formState=0;

  }

}
