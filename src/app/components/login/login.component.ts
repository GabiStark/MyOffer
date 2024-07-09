import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AppLogicService} from "../../services/app-logic.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  @Output() userLoged: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private serviceLogic: AppLogicService
  ){}

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      usuario: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      contraseña: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(14)
      ]]
    })
  }

  formularioLogin:FormGroup = new FormGroup({
    usuario: new FormControl(""),
    contraseña: new FormControl("")
  })

  login(){

  }

  changeForm(){
    this.serviceLogic.formsState=2;
  }

  closeForm(){
    this.serviceLogic.formsState=0;
  }

}
