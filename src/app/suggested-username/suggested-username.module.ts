import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { SuggestedUsernameComponent } from './suggested-username.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [SuggestedUsernameComponent],
  exports: [SuggestedUsernameComponent]
})
export class SuggestedUsernameModule {}
