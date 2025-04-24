import { Component } from '@angular/core';
import { RegistrationApiService } from '../../../../core/services/registration-api.service';
import { UserApiService } from '../../../../core/services/user-api.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss'],
})
export class CompanyRegistrationComponent {
  email = '';

  constructor(
    private api: RegistrationApiService,
    private userApi: UserApiService
  ) {}

  send() {
    // this.api.postTest(this.email).subscribe({
    //   next: (value) => console.log(value),
    // });
    // console.log(this.email);

    this.userApi.getUserAccInfo().subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  test() {
    this.userApi.getTest().subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }

  test2() {
    this.userApi.getTest2().subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }
}
