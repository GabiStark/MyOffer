import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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

  @Output() changeForm: EventEmitter<number> = new EventEmitter<number>();
  @Output() userLoged: EventEmitter<void> = new EventEmitter<void>();
  private showLogin: number=0;

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
    this.changeForm.emit(2);
  }

  closeForm(){
    this.changeForm.emit(0);
    //TODO hacer que los formullarios se cierren y se cambien, aprender bien el emit si es posible que cambie la variable del padre
  }

}
