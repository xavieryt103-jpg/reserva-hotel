import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  imports: [ReactiveFormsModule],
  templateUrl: './reserva.html',
  styleUrl: './reserva.css'
})
export class Reserva {
  enviado = false;

    formulario = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    habitacion: new FormControl('', Validators.required),
    noches: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(30)
    ])
  });

  reservar() {
    if (this.formulario.valid) {
      this.enviado = true;
      console.log('Reserva registrada', this.formulario.value);
    }
  }
}
