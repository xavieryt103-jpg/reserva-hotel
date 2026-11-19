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
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    habitacion: new FormControl('', Validators.required),
    noches: new FormControl<number | null>(null, Validators.required)
  });

  reservar() {
    if (this.formulario.valid) {
      this.enviado = true;
      console.log('Reserva registrada', this.formulario.value);
    }
  }
}
