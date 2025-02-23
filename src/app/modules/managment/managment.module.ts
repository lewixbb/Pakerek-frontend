import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersTabComponent } from './users/users-tab/users-tab.component';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './users/user-details/user-details.component';

@NgModule({
  declarations: [UsersComponent, UsersTabComponent, UserDetailsComponent],
  imports: [SharedModule],
  exports: [],
})
export class ManagmentModule {}
