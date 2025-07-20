import { Component, ViewEncapsulation } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { UserFormComponent } from '../../components/shared/user-form/user-form.component';
import { UserComplementFormComponent } from '../../components/shared/user-complement-form/user-complement-form.component';

@Component({
  selector: 'app-registro-page',
  standalone: true,
  imports: [
    StepperModule,
    ButtonModule,
    UserFormComponent,
    UserComplementFormComponent
  ],
  templateUrl: './registro-page.component.html',
  styleUrl: './registro-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RegistroPageComponent {
  pasoActual = 1;

  cambiarPaso(nuevoPaso: number) {
    this.pasoActual = nuevoPaso;
  }
}
