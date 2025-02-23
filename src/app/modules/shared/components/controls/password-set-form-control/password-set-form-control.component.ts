import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-password-set-form-control',
  templateUrl: './password-set-form-control.component.html',
  styleUrls: ['./password-set-form-control.component.scss'],
})
export class PasswordSetFormControlComponent implements OnInit {
  hide = true;
  form!: FormGroup;
  @Input() formGroupName!: string;

  constructor(private formGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroup.control.get(this.formGroupName) as FormGroup;
  }
}
