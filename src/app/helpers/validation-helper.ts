
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidationHelper {


  // Validación para campo requerido
  static requiredField(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }

  // Validación para formato de correo electrónico (permite mayúsculas y minúsculas)
  static emailFormat(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co)$/i;
    return emailRegex.test(control.value) ? null : { correo: true }; // Cambia 'email' a 'correo'
  }

  static password(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&*()\-_+=|{}\[\]:;<>,.?/~]).{8,}$/;
    return passwordRegex.test(control.value) ? null : { contrasena: true };
  }


  static nombre(control: AbstractControl): ValidationErrors | null {
    // Incluye letras con acentos y espacios
    const namePersonRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return namePersonRegex.test(control.value) ? null : { nombre: true };
  }


  // Validación para número de documento
  static documentNumber(control: AbstractControl): ValidationErrors | null {
    const tipoDocumentoId = control.parent?.get('tipo_documento_id')?.value;
    const numeroDocumento = control.value;

    if (!numeroDocumento) return null; // No validar si no hay número

    // Asegúrate de que 'tipoDocumentoId' coincida con el ID correspondiente a "Cedula de ciudadanía"
    if (tipoDocumentoId === 3) { // Suponiendo que '3' es el ID de "Cedula de ciudadanía"
      const isOnlyDigits = /^\d+$/.test(numeroDocumento);
      return isOnlyDigits ? null : { invalidDocumentNumberDigits: true }; // Mensaje específico para cédula de ciudadanía
    } else {
      const isAlphaNumeric = /^[a-zA-Z0-9]+$/.test(numeroDocumento);
      return isAlphaNumeric ? null : { invalidDocumentNumberAlphaNumeric: true }; // Mensaje para otros tipos de documentos
    }
  }

  static numericOnly(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null; // No validar si está vacío
    const isOnlyDigits = /^\d+$/.test(control.value);
    return isOnlyDigits ? null : { numericOnly: true };
  }



  // Validación para teléfono
  static phoneNumber(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      // Si el valor está vacío, no hay error (es opcional)
      return null;
    }
    const phoneRegex = /^\d{0,15}$/; // Permite hasta 15 dígitos numéricos
    return phoneRegex.test(control.value) ? null : { invalidPhoneNumber: true };
  }

  // Validación para roles y dependencias seleccionados
  static selectFieldRequired(control: AbstractControl): ValidationErrors | null {
    return control.value ? null : { required: true };
  }


  static minLength(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value ?? '').toString(); // Convierte null, undefined y números a string
      return value.length >= min
        ? null
        : { minlength: { requiredLength: min, actualLength: value.length } };
    };
  }


  static maxLength(max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = (control.value ?? '').toString(); // Convierte null, undefined y números a string
      return value.length <= max
        ? null
        : { maxlength: { requiredLength: max, actualLength: value.length } };
    };
  }


  // Validación de no dos espacio en blaco seguidos
  static noDoubleSpaces(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    // Verificar si el valor contiene dos o más espacios consecutivos
    if (/\s{2,}/.test(value)) {
      return { doubleSpaces: true }; // Devuelve un error si hay dos o más espacios consecutivos
    }

    return null; // Devuelve null si no hay errores
  }

  // Validación de valor máximo
  static maxValue(max: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // No validar si el campo está vacío
      }
      const value = Number(control.value);
      return !isNaN(value) && value <= max ? null : { maxValue: { maxValue: max, actualValue: value } };
    };
  }

  // Validación de valor mínimo
  static minValue(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // No validar si el campo está vacío
      }
      const value = Number(control.value);
      return !isNaN(value) && value >= min ? null : { minValue: { minValue: min, actualValue: value } };
    };
  }



}
