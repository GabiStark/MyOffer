import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {SinginComponent} from "../singin/singin.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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

  showLogin: number = 0;
  usuario:boolean = false;


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
