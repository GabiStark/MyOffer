import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LogicService} from "../../services/logic.service";

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

  @Output() changeForm: EventEmitter<void> = new EventEmitter<void>();
  @Output() userLoged: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,

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

  toggleForm(){
    this.changeForm.emit();
  }

  closeForm(){
    this.changeForm.emit();
  }

}
