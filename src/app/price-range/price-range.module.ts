import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSliderModule } from '@angular/material';
import { PriceRangeComponent } from './price-range.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSliderModule
  ],
  declarations: [PriceRangeComponent],
  exports: [PriceRangeComponent]
})
export class PriceRangeModule {}
