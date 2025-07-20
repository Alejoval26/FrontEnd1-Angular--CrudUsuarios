import Swal, { SweetAlertIcon } from 'sweetalert2';

export class AlertHelper {
  // Método para mostrar una alerta genérica
  static showAlert(message: string, title: string = 'Información', icon: SweetAlertIcon = 'success') {
    return Swal.fire({
      title,
      text: message,
      icon,
    //   confirmButtonText: 'Aceptar',
      width: '450px',
      didOpen: () => {
                const swalContainer = document.querySelector('.swal2-container');
                if (swalContainer) {
                    swalContainer.setAttribute('style', 'z-index: 9999;');
                }
            }
    });
  }

  // Método para mostrar una alerta de confirmación
  static showConfirmation(
    message: string,
    title: string = 'Atención',
    confirmButtonText: string = 'Sí',
    cancelButtonText: string = 'No'
  ) {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor: '#35B8E8',
      cancelButtonColor: '#CC2727',
      reverseButtons: false,
      didOpen: () => {
        const swalContainer = document.querySelector('.swal2-container');
        if (swalContainer) {
          swalContainer.setAttribute('style', 'z-index: 9999 !important;');
        }
      }
    });
  }


  // Método para mostrar una alerta de éxito
  static showSuccess(message: string, title: string = '¡Éxito!') {
    return this.showAlert(message, title, 'success');
  }

  // Método para mostrar una alerta de error
  static showError(message: string, title: string = 'Error') {
    return this.showAlert(message, title, 'error');
  }

  // Método para mostrar una alerta de información
  static showInfo(message: string, title: string = 'Información') {
    return this.showAlert(message, title, 'info');
  }
}
