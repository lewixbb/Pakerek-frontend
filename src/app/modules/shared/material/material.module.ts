import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { A11yModule } from '@angular/cdk/a11y';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    A11yModule,
    MatBadgeModule,
  ],
})
export class MaterialModule {}
