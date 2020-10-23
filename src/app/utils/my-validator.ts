import { AbstractControl } from '@angular/forms';
export class MyValidator {
  static isYounger(control: AbstractControl){
    const valor = control.value;
    if (valor < 18) {
      return { isYounger: true };
    }
    return null;
  }
}
