import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CheckboxInputDataModel } from '../../../core/models/checkboxInputData.model';
import { PaymentMethodApiService } from '../../../core/services/payment-method-api.service';

@Component({
  selector: 'app-payment-method-choice',
  templateUrl: './payment-method-choice.component.html',
  styleUrls: ['./payment-method-choice.component.scss'],
})
export class PaymentMethodChoiceComponent implements OnInit {
  paymentMethod = new Subject<CheckboxInputDataModel[]>();

  constructor(private paymentApi: PaymentMethodApiService) {}

  ngOnInit(): void {
    this.paymentApi.paymentMethods.subscribe({
      next: (response) => {
        this.paymentMethod.next(response);
      },
    });
  }
}
