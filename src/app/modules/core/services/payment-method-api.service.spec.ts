import { TestBed } from '@angular/core/testing';

import { PaymentMethodApiService } from './payment-method-api.service';

describe('PaymentMethodApiService', () => {
  let service: PaymentMethodApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentMethodApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
