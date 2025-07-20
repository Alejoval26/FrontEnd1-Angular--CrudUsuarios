import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroFormService {
  private datosPaso1: any = null;
  private datosPaso2: any = null;

  setPaso1(data: any) {
    this.datosPaso1 = data;
  }

  getPaso1() {
    return this.datosPaso1;
  }

  setPaso2(data: any) {
    this.datosPaso2 = data;
  }

  getPaso2() {
    return this.datosPaso2;
  }

  getResumenCompleto() {
    return {
      paso1: this.datosPaso1,
      paso2: this.datosPaso2,
    };
  }
}
