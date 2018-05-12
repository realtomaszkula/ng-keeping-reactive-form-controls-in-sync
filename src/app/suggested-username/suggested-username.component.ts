import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-suggested-username',
  template: `
    <form [formGroup]="form">
      <mat-form-field>
        <input matInput formControlName="firstName" placeholder="First name" />
      </mat-form-field>
      <mat-form-field>
        <input matInput formControlName="lastName" placeholder="Last name" />
      </mat-form-field>
      <mat-form-field>
        <input matInput formControlName="username" placeholder="Username" />
      </mat-form-field>
    </form>
  `,
  styleUrls: ['./suggested-username.component.css']
})
export class SuggestedUsernameComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      username: ''
    });

    this.reactiveUsername();
  }

  reactiveUsername() {
    const firstName = this.form.get('firstName');
    const lastName = this.form.get('lastName');
    const username = this.form.get('username');

    const combined$ = combineLatest(
      firstName.valueChanges,
      lastName.valueChanges
    )
      .pipe(map(([first, last]) => (first && last ? `${first}-${last}` : '')))
      .subscribe(value => username.setValue(value));
  }
}
