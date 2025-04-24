import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { BasketTabMiniComponent } from './components/basket/basket-tab-mini/basket-tab-mini.component';
import { BasketItemListMiniComponent } from './components/basket/basket-tab-mini/basket-item-list-mini/basket-item-list-mini.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BasketTabMiniComponent,
    BasketItemListMiniComponent,
  ],
  imports: [
    RouterLink,
    BrowserAnimationsModule,
    SharedModule,
    RouterLinkActive,
  ],
  exports: [HeaderComponent, RouterLink],
})
export class CoreModule {}
