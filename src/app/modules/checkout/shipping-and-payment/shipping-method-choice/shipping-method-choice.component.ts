import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ShippingApiService } from '../../../core/services/shipping-api.service';
import { shippingMethod } from '../../../core/models/shipping.model';
import { CheckboxInputDataModel } from '../../../core/models/checkboxInputData.model';
import { BasketService } from '../../../core/services/basket.service';

@Component({
  selector: 'app-shipping-method-choice',
  templateUrl: './shipping-method-choice.component.html',
  styleUrls: ['./shipping-method-choice.component.scss'],
})
export class ShippingMethodChoiceComponent implements OnInit {
  shippingMethods!: shippingMethod[];
  controlsData = new Subject<CheckboxInputDataModel[]>();
  chosenOption!: shippingMethod;

  constructor(
    private shippingApi: ShippingApiService,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    this.shippingApi.getShippingMethods().subscribe({
      next: (response) => {
        this.shippingMethods = response;
        this.controlsData.next(response);
      },
    });
  }

  getDataChosenData(id: number) {
    this.chosenOption = this.shippingMethods.filter(
      (shippingMethod) => shippingMethod.id === id
    )[0];
  }
}
