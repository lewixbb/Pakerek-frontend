import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const repeatPassword = control.get('repeatPassword')?.value;
    const value = control.value;

    if (password && repeatPassword && password === repeatPassword) {
      control.get('repeatPassword')?.setErrors(null);
      return null;
    }
    control.get('repeatPassword')?.setErrors({ invalidMatchPassword: true });
    return { invalidMatchPassword: { value } };
  };
}
