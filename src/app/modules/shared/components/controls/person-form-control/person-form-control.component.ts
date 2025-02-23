import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-person-form-control',
  templateUrl: './person-form-control.component.html',
  styleUrls: ['./person-form-control.component.scss'],
})
export class PersonFormControlComponent implements OnInit {
  form!: FormGroup;
  @Input() formGroupName!: string;
  constructor(private formGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroup.control.get(this.formGroupName) as FormGroup;
  }
}
