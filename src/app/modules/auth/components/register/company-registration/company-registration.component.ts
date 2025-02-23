import { Component } from '@angular/core';
import { RegistrationApiService } from '../../../../core/services/registration-api.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss'],
})
export class CompanyRegistrationComponent {
  email = '';

  constructor(private api: RegistrationApiService) {}

  send() {
    this.api.postTest(this.email).subscribe({
      next: (value) => console.log(value),
    });
    console.log(this.email);
  }
}
