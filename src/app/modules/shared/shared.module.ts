import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { RouterLink } from '@angular/router';
import { AddRemoveItemPanelComponent } from './components/add-remove-item-panel/add-remove-item-panel.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    ProductTileComponent,
    AddRemoveItemPanelComponent,
    AlertComponent,
  ],
  imports: [MaterialModule, RouterLink, CommonModule],
  exports: [
    MaterialModule,
    ProductTileComponent,
    CommonModule,
    AddRemoveItemPanelComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
