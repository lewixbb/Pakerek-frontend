import { AfterContentInit, Component, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-phone-control',
  templateUrl: './phone-control.component.html',
  styleUrls: ['./phone-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneControlComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneControlComponent,
      multi: true,
    },
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '(blur)': 'onBlur()' },
})
export class PhoneControlComponent
  implements ControlValueAccessor, OnDestroy, AfterContentInit
{
  validator: ValidatorFn[] = [];
  phoneControl = this.formBuilder.group({
    prefixNumberControl: new FormControl(''),
    phoneNumberControl: new FormControl(''),
  });
  sub = new Subscription();

  validate(control: AbstractControl) {
    if (control.hasValidator(Validators.required)) {
      this.validator.push(Validators.required);
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.sub = combineLatest([
      this.phoneControl.controls.prefixNumberControl.valueChanges,
      this.phoneControl.controls.phoneNumberControl.valueChanges,
    ]).subscribe(([prefix, number]) => {
      if (prefix && number) {
        this.onChange(this.prefixAndNumberVerification(prefix, number));
      } else {
        this.onChange(null);
      }
    });
  }

  ngAfterContentInit(): void {
    this.phoneControl.controls.prefixNumberControl.setValidators(
      this.validator
    );
    this.phoneControl.controls.phoneNumberControl.setValidators(this.validator);
  }

  private onChange = (value: string | null) => {};
  private onTouched = () => {};

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.phoneControl.controls.prefixNumberControl.disable();
      this.phoneControl.controls.phoneNumberControl.disable();
    } else {
      this.phoneControl.controls.prefixNumberControl.enable();
      this.phoneControl.controls.phoneNumberControl.enable();
    }
  }

  writeValue(value: string): void {
    const numberWithoutPlus = value.replace('+', '');
    const prefix = numberWithoutPlus.slice(0, 2);
    const number = numberWithoutPlus.slice(2);
    if (prefix) {
      this.phoneControl.controls.prefixNumberControl.setValue(prefix);
    }
    if (number) {
      this.phoneControl.controls.phoneNumberControl.setValue(number);
    }
  }

  public onBlur(): void {
    this.phoneControl.markAllAsTouched();
    this.onTouched();
  }

  private prefixAndNumberVerification(prefix: string, number: string): string {
    if (prefix.at(0) === '+') {
      prefix = prefix.slice(1);
    }
    if (prefix.at(0) === '0') {
      number = prefix.slice(1) + number;
      prefix = '48';
    }
    return `+${prefix}${number}`;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
