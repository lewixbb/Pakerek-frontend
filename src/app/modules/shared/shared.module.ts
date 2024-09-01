import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ProductTileComponent],
  imports: [MaterialModule, RouterLink, CommonModule],
  exports: [MaterialModule, ProductTileComponent, CommonModule],
})
export class SharedModule {}
