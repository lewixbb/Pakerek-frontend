import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping-customer-data',
  templateUrl: './shipping-customer-data.component.html',
  styleUrls: ['./shipping-customer-data.component.scss'],
})
export class ShippingCustomerDataComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  showForm = false;
  check = new FormGroup({
    invoice: new FormControl(false),
    shippingAdditionalData: new FormControl(false, { nonNullable: true }),
  });

  ngOnInit(): void {
    this.sub =
      this.check.controls.shippingAdditionalData.valueChanges.subscribe({
        next: (value) => {
          this.showForm = value;
        },
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
