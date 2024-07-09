import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-singin',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent implements OnInit {

  @Output() changeForm: EventEmitter<number> = new EventEmitter<number>();
  @Output() userLoged: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {

    this.formularioRegistro = this.formBuilder.group({
      usuario: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      contraseña: ["", [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(14)
      ]],
      confirmarContraseña: ["",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(14)
        ]
      ]
    })
  }

  formularioRegistro: FormGroup = new FormGroup({
    usuario: new FormControl(""),
    contraseña: new FormControl(""),
    confirmarContraseña: new FormControl("")
  })

  registro() {


  }

  toggleForm(){
    this.changeForm.emit(2);
  }

  cerrarForm(){
    this.changeForm.emit(0);
  }

}
