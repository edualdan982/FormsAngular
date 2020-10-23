import { AbstractControl } from '@angular/forms';

export class MyValidations {

  static age(control: AbstractControl) {
    const value = control.value;
    if (value < 18) {
      return {isYoung: true};
    }
    return null;
  }

  static ageWithParam(max: number) {
    return (control: AbstractControl) => {
      const value = control.value;
      if (value < max) {
        return {isYoung: true};
      }
      return null;
    };
  }