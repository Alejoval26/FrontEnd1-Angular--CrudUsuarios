import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ValidationHelper } from '../../../helpers/validation-helper';
import { ValidationMessageHelper } from '../../../helpers/validation-message-helper';

@Component({
  selector: 'app-user-complement-form',
  standalone: true,
  templateUrl: './user-complement-form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
  ],
})
export class UserComplementFormComponent {
  @Output() avanzarPaso = new EventEmitter<void>();
  @Output() regresarPaso = new EventEmitter<void>();

  complementForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.complementForm = this.fb.group({
      direccion: ['', [ValidationHelper.requiredField]],
      fechaNacimiento: ['', [ValidationHelper.requiredField]],
      ciudadResidencia: ['', [ValidationHelper.requiredField]],
    });
  }

  getErrorMessage(fieldName: string): string | null {
    const control = this.complementForm.get(fieldName);
    return control ? ValidationMessageHelper.getValidatorErrorMessage(control) : null;
  }

  enviarComplemento() {
    if (this.complementForm.valid) {
      console.log('📦 Datos complementarios:', this.complementForm.value);
      this.avanzarPaso.emit();
    } else {
      console.warn('⚠️ Formulario complementario no válido');
    }
  }

  regresarPasoAnterior() {
      this.regresarPaso.emit();
  }
}
