import { AbstractControl } from "@angular/forms";

export class ValidationMessageHelper {

  // Método para obtener el mensaje de error de un control
  static getValidatorErrorMessage(control: AbstractControl): string | null {
    if (control.errors) {
      for (const errorName in control.errors) {
        if (control.errors.hasOwnProperty(errorName)) {
          return this.getErrorMessage(errorName, control.errors[errorName]);
        }
      }
    }
    return null;
  }

  // Configuración de mensajes de error
  private static getErrorMessage(validatorName: string, validatorValue?: any): string {
    const config: any = {
      'required': 'La información de este campo es obligatoria.',
      'correo': 'Formato de correo electrónico no válido',
      'nombre': 'El nombre solo puede contener letras y espacios',
      'numericOnly': 'Este campo solo permite números.',
      'contrasena': `
        Formato de contraseña no válido:
        <ul>
          <li>Debe contener al menos una letra minúscula</li>
          <li>Debe contener al menos una letra mayúscula</li>
          <li>Debe contener al menos un número</li>
          <li>Debe contener al menos un carácter especial (@*#&.)</li>
          <li>Debe tener al menos 8 caracteres</li>
        </ul>
      `,
      'invalidDocumentNumberDigits': 'Documento inválido. El tipo de documento seleccionado impide que el número de documento contenga caracteres diferentes a números.',
      'invalidDocumentNumberAlphaNumeric': 'Documento inválido. El tipo de documento seleccionado impide que el número de documento contenga caracteres diferentes a números y letras.',
      'invalidPhoneNumber': 'Número de teléfono inválido. Debe contener solo dígitos y tener un máximo de 15 caracteres.',
      'minlength': `Debe tener al menos ${validatorValue.requiredLength} caracteres. Actualmente tiene ${validatorValue.actualLength} caracteres.`,
      'maxlength': `Debe tener un máximo de ${validatorValue.requiredLength} caracteres. Actualmente tiene ${validatorValue.actualLength} caracteres.`,
      'doubleSpaces': 'No se permiten dos espacios consecutivos.',
      'maxValue': `El valor debe ser menor o igual a ${validatorValue.maxValue}. Actualmente es ${validatorValue.actualValue}.`,
      'minValue': `El valor debe ser mayor o igual a ${validatorValue.minValue}. Actualmente es ${validatorValue.actualValue}.`
    };

    return config[validatorName] || 'Campo no válido';
  }
}
