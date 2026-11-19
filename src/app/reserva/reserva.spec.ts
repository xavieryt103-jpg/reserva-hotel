import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reserva } from './reserva';

describe('Reserva', () => {
  let component: Reserva;
  let fixture: ComponentFixture<Reserva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reserva],
    }).compileComponents();

    fixture = TestBed.createComponent(Reserva);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe iniciar con el formulario inválido', () => {
    expect(component.formulario.valid).toBe(false);
  });

  it('debe rechazar un correo inválido', () => {
    const email = component.formulario.controls.email;
    email.setValue('correo-malo');
    expect(email.valid).toBe(false);
  });

  it('debe rechazar un nombre con menos de 3 caracteres', () => {
    const nombre = component.formulario.controls.nombre;
    nombre.setValue('Lu');
    expect(nombre.valid).toBe(false);
  });

  it('debe rechazar 0 noches', () => {
    const noches = component.formulario.controls.noches;
    noches.setValue(0);
    expect(noches.valid).toBe(false);
  });

  it('debe rechazar más de 14 noches', () => {
    const noches = component.formulario.controls.noches;
    noches.setValue(15);
    expect(noches.valid).toBe(false);
  });

  it('debe aceptar una reserva con datos válidos', () => {
    component.formulario.setValue({
      nombre: 'Luis Torres',
      email: 'luis@test.com',
      habitacion: 'Doble',
      noches: 3
    });
    expect(component.formulario.valid).toBe(true);
  });
});
