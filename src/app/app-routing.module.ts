import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { ProductDetailsComponent } from './modules/products/product-details/product-details.component';
import { BasketComponent } from './modules/checkout/basket/basket.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';
import { ShippingAndPaymentComponent } from './modules/checkout/shipping-and-payment/shipping-and-payment.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { UsersComponent } from './modules/managment/users/users.component';
import { UserDetailsComponent } from './modules/managment/users/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'Suplementy, odżywki !!',
  },
  {
    path: 'produkty',
    component: ProductsComponent,
    title: 'Suplementy, odżywki !!',
  },
  {
    path: 'produkty/:id',
    component: ProductDetailsComponent,
    title: 'Suplementy, odżywki !!',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Logowanie',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Rejestracja konta',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'koszyk zakupowy',
    children: [
      { path: '', component: BasketComponent, title: 'koszyk zakupowy' },
      {
        path: 'shipping&paymentMethod',
        component: ShippingAndPaymentComponent,
        title: 'wybór przesyłki i sposobu płatności',
      },
    ],
  },
  {
    path: 'uzytkownicy',
    component: UsersComponent,
    title: 'lista użytkowników',
  },
  {
    path: `uzytkownicy/:id`,
    component: UserDetailsComponent,
    title: 'dane użytkownika',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
