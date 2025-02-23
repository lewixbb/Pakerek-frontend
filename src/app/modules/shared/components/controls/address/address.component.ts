import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() formGroupName!: string;
  form!: FormGroup;

  constructor(private formGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.formGroup.control.get(this.formGroupName) as FormGroup;
  }
}
