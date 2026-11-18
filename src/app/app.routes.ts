import { Routes } from '@angular/router';
import { Reserva } from './reserva/reserva';

export const routes: Routes = [
  { path: '', 
    redirectTo: 'reserva',
    pathMatch: 'full' 

  },
  { path: 'reserva', 
    component: Reserva }
];