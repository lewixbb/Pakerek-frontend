import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minLengthWithExcludeValidator(
  requiredLength: number,
  excludeSign?: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let value = control.value;
    if (!value) {
      return null;
    }
    if (excludeSign) {
      value = value.replaceAll(excludeSign, '');
    }
    const actualLength = value.length;
    if (value.length < requiredLength) {
      return { minlength: { requiredLength, actualLength } };
    } else {
      return null;
    }
  };
}
