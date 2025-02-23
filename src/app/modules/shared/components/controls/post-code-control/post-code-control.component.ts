import {
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { Subject, Subscription } from 'rxjs';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-post-code-control',
  templateUrl: './post-code-control.component.html',
  styleUrls: ['./post-code-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: PostCodeControlComponent,
      multi: true,
    },
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
})
export class PostCodeControlComponent
  implements
    OnInit,
    ControlValueAccessor,
    MatFormFieldControl<string>,
    OnDestroy
{
  static nextId = 0;
  @ViewChild('prefix') prefixInput!: HTMLInputElement;
  @ViewChild('suffix') suffixInput!: HTMLInputElement;

  parts: FormGroup<{
    prefix: FormControl<string | null>;
    suffix: FormControl<string | null>;
  }>;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'app-post-code-control';
  sub = new Subscription();
  @HostBinding()
  id = `app-post-code-control-${PostCodeControlComponent.nextId++}`;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onTouched = () => {};

  constructor(
    private formBuilder: FormBuilder,
    private focusMonitor: FocusMonitor,
    private elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public parentFormField: MatFormField,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.parts = this.formBuilder.group({
      prefix: ['', [Validators.required, Validators.minLength(2)]],
      suffix: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    if (
      this.parts.controls.prefix.hasValidator(Validators.required) &&
      this.parts.controls.suffix.hasValidator(Validators.required)
    ) {
      this.required = true;
    }
  }

  @Input()
  get value(): string {
    const {
      value: { prefix, suffix },
    } = this.parts;
    return prefix + '-' + suffix;
  }

  set value(postCode: string | null) {
    if (postCode && postCode.length == 6) {
      const prefix = postCode.slice(0, 2);
      const suffix = postCode.slice(3);
      this.parts.setValue({ prefix, suffix });
    } else {
      this.parts.reset();
    }
    this.stateChanges.next();
  }

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  // @Input('aria-describedby') userAriaDescribedBy!: string;
  setDescribedByIds(ids: string[]) {
    const controlElement = this.elementRef.nativeElement.querySelector(
      '.post-code-input-container'
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  @Input()
  get placeholder() {
    return this.focused ? this._placeholder : '';
  }

  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  private _placeholder!: string;

  @Input()
  get required() {
    return this._required;
  }

  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }

  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }

  private _disabled = false;

  get errorState(): boolean {
    return this.parts.invalid && this.touched;
  }

  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (
      !this.elementRef.nativeElement.contains(event.relatedTarget as Element)
    ) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  get empty() {
    const {
      value: { prefix, suffix },
    } = this.parts;
    return !prefix && !suffix;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(postCode: string | null) {
    this.value = postCode;
  }

  onContainerClick(event: MouseEvent) {
    if (this.parts.controls.suffix.valid) {
      this.focusMonitor.focusVia(this.suffixInput, 'program');
    } else if (this.parts.controls.prefix.valid) {
      this.focusMonitor.focusVia(this.suffixInput, 'program');
    } else {
      this.focusMonitor.focusVia(this.prefixInput, 'program');
    }
  }

  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      this.focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this.focusMonitor.focusVia(prevElement, 'program');
    }
  }

  handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
    this.autoFocusNext(control, nextElement);
    this.onChange(this.value);
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.focusMonitor.stopMonitoring(this.elementRef);
  }
}
