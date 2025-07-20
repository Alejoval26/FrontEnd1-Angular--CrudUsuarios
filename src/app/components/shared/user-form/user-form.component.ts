import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationHelper } from '../../../helpers/validation-helper';
import { ValidationMessageHelper } from '../../../helpers/validation-message-helper';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { RegistroFormService } from '../../../services/registro-form.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    SelectModule,
    ButtonModule
  ],
})
export class UserFormComponent {
  userForm: FormGroup;
  @Output() avanzarPaso = new EventEmitter<void>();

  tiposDocumento = [
    { label: 'Cédula de ciudadanía', value: 3 },
    { label: 'Pasaporte', value: 4 },
    { label: 'Otro', value: 5 }
  ];

  constructor(
    private fb: FormBuilder,
    private registroFormService: RegistroFormService
  ) {
    this.userForm = this.fb.group({
      tipo_documento_id: ['', [ValidationHelper.requiredField]],
      numero_documento: ['', [ValidationHelper.requiredField, ValidationHelper.numericOnly]],
      nombres: ['', [ValidationHelper.requiredField, ValidationHelper.nombre]],
      apellidos: ['', [ValidationHelper.requiredField, ValidationHelper.nombre]],
      correo: ['', [ValidationHelper.requiredField, ValidationHelper.emailFormat]],
      telefono: ['', [ValidationHelper.phoneNumber]],
    });

    const datosGuardados = this.registroFormService.getPaso1();
    if (datosGuardados) {
      this.userForm.patchValue(datosGuardados);
    }
  }

  getErrorMessage(fieldName: string): string | null {
    const control = this.userForm.get(fieldName);
    return control ? ValidationMessageHelper.getValidatorErrorMessage(control) : null;
  }

  registrarUsuario() {
    if (this.userForm.valid) {
      const valores = this.userForm.value;
      this.registroFormService.setPaso1(valores)
      console.log('📦 Datos del formulario:', valores);
      this.avanzarPaso.emit();
    } else {
      console.warn('⚠️ El formulario no es válido');
    }
  }

}
