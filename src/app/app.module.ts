import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SuggestedUsernameModule } from './suggested-username/suggested-username.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SuggestedUsernameModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
