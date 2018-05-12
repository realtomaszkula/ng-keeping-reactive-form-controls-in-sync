import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PriceRangeModule } from './price-range/price-range.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PriceRangeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
