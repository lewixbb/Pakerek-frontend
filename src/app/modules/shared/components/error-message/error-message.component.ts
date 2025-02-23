import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() controls!: AbstractControl | null | undefined;

  getErrorMessage(control: AbstractControl | null | undefined) {
    if (!control) {
      return '';
    }
    if (control.hasError('required')) {
      return 'Musisz wpisać jakąś wartość.';
    }
    if (control.hasError('email')) {
      return 'Wartość musi mieć formę adresu e-mail';
    }
    if (control.hasError(`minlength`)) {
      return `Wartość wpisana w pole jest zbyt krótka ma tylko ${
        control.errors?.['minlength'].actualLength
      } ${this.minLengthProperFormForPolish(
        control.errors?.['minlength'].actualLength
      )} a powinna mieć minimum ${
        control.errors?.[`minlength`].requiredLength
      }`;
    }
    if (control.hasError('invalidDifficultyPassword')) {
      return `Hasło musi zawierać conajmniej jedna litere duża, jedną małą oraz cyfrę`;
    }
    if (control.hasError(`invalidMatchPassword`)) {
      return 'Wartość dla obu haseł musi być jednakowa.';
    }
    if (control.hasError('invalidPostCodeFormat')) {
      return 'Zły format kodu pocztowego';
    }
    return '';
  }

  private minLengthProperFormForPolish(min: number): string {
    if (min == 1) {
      return 'znak';
    } else if (min > 1 && min < 5) {
      return 'znaki';
    } else {
      return 'znaków';
    }
  }
}
