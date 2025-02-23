import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { matchPasswordValidator } from '../../../../shared/validators/match-password.validator';
import { invalidPostCodeFormat } from '../../../../shared/validators/post-code-format.validator';
import { minLengthWithExcludeValidator } from '../../../../shared/validators/min-length-with-exclude.validator';
import { RegistrationService } from '../../../../core/services/registration.service';
import { PostUser, User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-person-registration',
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.scss'],
})
export class PersonRegistrationComponent implements OnInit {
  hide = true;
  hideRepeat = true;

  public registrationForm!: FormGroup;
  private registrationFormData!: User;

  constructor(
    private formBuilder: FormBuilder,
    private registration: RegistrationService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      passwordSetForm: this.formBuilder.group(
        {
          password: new FormControl('', { validators: [Validators.required] }),
          repeatPassword: new FormControl('', {
            validators: [Validators.required],
          }),
        },
        { validators: [matchPasswordValidator()] }
      ),
      person: this.formBuilder.group({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        surname: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        address: this.formBuilder.group({
          street: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ]),
          doorNr: new FormControl(''),
          postCode: new FormControl('', [
            Validators.required,
            invalidPostCodeFormat(),
          ]),
          city: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ]),
        }),
        phoneNumber: new FormControl('', [
          Validators.required,
          minLengthWithExcludeValidator(9, '+'),
        ]),
      }),
    });
  }

  register() {
    this.registrationFormData = this.registrationForm.getRawValue();
    this.registration.registerUser(this.registrationFormData);
  }
}
