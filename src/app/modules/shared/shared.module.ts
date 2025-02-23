import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { RouterLink } from '@angular/router';
import { AddRemoveItemPanelComponent } from './components/add-remove-item-panel/add-remove-item-panel.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDataTabComponent } from './components/customer-data-tab/customer-data-tab.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';
import { PhoneControlComponent } from './components/controls/phone-control/phone-control.component';
import { AddressComponent } from './components/controls/address/address.component';
import { PersonFormControlComponent } from './components/controls/person-form-control/person-form-control.component';
import { PasswordSetFormControlComponent } from './components/controls/password-set-form-control/password-set-form-control.component';
import { PostCodeControlComponent } from './components/controls/post-code-control/post-code-control.component';

@NgModule({
  declarations: [
    ProductTileComponent,
    AddRemoveItemPanelComponent,
    AlertComponent,
    CustomerDataTabComponent,
    ErrorMessageComponent,
    CheckboxListComponent,
    PhoneControlComponent,
    AddressComponent,
    PersonFormControlComponent,
    PasswordSetFormControlComponent,
    PostCodeControlComponent,
  ],
  imports: [MaterialModule, RouterLink, CommonModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    ProductTileComponent,
    CommonModule,
    AddRemoveItemPanelComponent,
    AlertComponent,
    FormsModule,
    CustomerDataTabComponent,
    ReactiveFormsModule,
    CheckboxListComponent,
    RouterLink,
    ErrorMessageComponent,
    PhoneControlComponent,
    AddressComponent,
    PersonFormControlComponent,
    PasswordSetFormControlComponent,
    PostCodeControlComponent,
  ],
})
export class SharedModule {}
