import { AbstractControl, ValidatorFn } from '@angular/forms';

export function difficultyPasswordValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): { [key: string]: { value: string } } | null => {
    const value = control.value;
    const passwordPattern = /^\s{3}\d{3}$/;
    const password = value.toString();
    const passArray = password.trim();

    const upperLetter = /[A-Z]/.test(value);

    if (upperLetter) {
      return null;
    }
    return { invalidDifficultyPassword: { value } };
  };
}
