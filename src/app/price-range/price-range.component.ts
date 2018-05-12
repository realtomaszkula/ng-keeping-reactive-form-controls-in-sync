import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-price-range',
  template: `
  <form [formGroup]="form">
    <mat-slider formControlName="rangeStart" thumbLabel min="1" max="5" step="0.5" value="1.5"></mat-slider>
    <mat-slider formControlName="rangeEnd" thumbLabel min="1" max="5" step="0.5" value="1.5"></mat-slider>
  </form>
  `,
  styleUrls: ['./price-range.component.css']
})
export class PriceRangeComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      rangeStart: 0,
      rangeEnd: 0
    });

    this.reactiveRange();
  }

  reactiveRange() {
    const startCtrl = this.form.get('rangeStart');
    const endCtrl = this.form.get('rangeEnd');

    startCtrl.valueChanges
      .pipe(filter(v => v > endCtrl.value))
      .subscribe(v => endCtrl.setValue(v));

    endCtrl.valueChanges
      .pipe(filter(v => v < startCtrl.value))
      .subscribe(v => startCtrl.setValue(v));
  }
}
