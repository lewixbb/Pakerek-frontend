import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidPostCodeFormat(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const postCodePattern = /^\d{2}-\d{3}$/;
    const value = control.value;
    if (!value || postCodePattern.test(value)) {
      return null;
    }
    return { invalidPostCodeFormat: { value } };
  };
}
