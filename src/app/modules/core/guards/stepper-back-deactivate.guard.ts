import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CheckoutComponent } from '../../checkout/checkout.component';

export const stepperBackDeactivateGuard: CanDeactivateFn<CheckoutComponent> = (
  component: CheckoutComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  return true;
};
