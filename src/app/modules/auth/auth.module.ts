import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { PersonRegistrationComponent } from './components/register/person-registration/person-registration.component';
import { CompanyRegistrationComponent } from './components/register/company-registration/company-registration.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PersonRegistrationComponent,
    CompanyRegistrationComponent,
  ],
  imports: [SharedModule],
  exports: [],
})
export class AuthModule {}
