import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormControl } from '@angular/forms';
import { PriceRangeComponent } from './price-range.component';
import { PriceRangeModule } from './price-range.module';

describe('PriceRangeComponent', () => {
  let component: PriceRangeComponent;
  let fixture: ComponentFixture<PriceRangeComponent>;
  let startCtrl: FormControl;
  let endCtrl: FormControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PriceRangeModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const { form } = component;

    startCtrl = form.get('rangeStart') as FormControl;
    endCtrl = form.get('rangeEnd') as FormControl;
  });

  it(`rangeEnd should match the rangeStart if rangeStart is increased above rangeEnd's value`, () => {
    expect(startCtrl.value).toBe(0);
    expect(endCtrl.value).toBe(0);

    startCtrl.setValue(100);

    expect(endCtrl.value).toBe(100);
  });

  it(`rangeStart should match the rangeEnd if rangeEnd is decreased below rangeStart's value`, () => {
    expect(startCtrl.value).toBe(0);
    expect(endCtrl.value).toBe(0);

    startCtrl.setValue(100);
    endCtrl.setValue(50);

    expect(startCtrl.value).toBe(50);
  });
});
